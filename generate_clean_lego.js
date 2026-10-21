import sharp from 'sharp';

async function generateClean() {
  const imgPath = 'C:/Users/ACER/.gemini/antigravity-ide/brain/65f71ea8-7dfa-4a77-bfa2-d3d47b7750d7/.user_uploaded/media_1792471397876.jpg';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const alpha = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const pIdx = idx * channels;
      const r = data[pIdx], g = data[pIdx+1], b = data[pIdx+2];
      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const diffRB = Math.abs(r - b);
      const diffGB = Math.abs(g - b);
      const isNeutral = (diffRB < 22 && diffGB < 22);

      // 1. Hair region: x in [335, 645], y in [95, 375]
      const inHair = (x >= 335 && x <= 645 && y >= 95 && y <= 375);

      // 2. Torso / Shirt / Lanyard region:
      // Note: shoulders slope down. At y=440..500, x is in [440, 660]. At y=500..820, x is in [300, 720]
      const inTorso = (
        (y >= 440 && y < 500 && x >= 440 && x <= 660) ||
        (y >= 500 && y <= 820 && x >= 290 && x <= 720)
      );

      // 3. Pants region:
      const inPants = (y > 820 && y <= 1024 && x >= 300 && x <= 720);

      // 4. Arms & Hands:
      // Left arm: x in [170, 310], y in [600, 1010]
      // Right arm: x in [700, 915], y in [600, 1010]
      const inArms = (
        (x >= 170 && x <= 310 && y >= 600 && y <= 1010) ||
        (x >= 700 && x <= 915 && y >= 600 && y <= 1010)
      );

      // Is this inside the Lego Minifigure body?
      const inBody = inHair || inTorso || inPants || inArms;

      if (!inBody) {
        // Outside the minifigure body, we have:
        // - Cards (bright light blue / white)
        // - Blue orbit line (cyan / bright blue)
        // - Background smoke & empty space
        
        // Is it the blue orbit line?
        const isBlueOrbit = (b > 120 && b > r + 35 && g > 70);
        // Is it a card?
        const isCard = (maxVal > 95 && (b > 130 || maxVal > 150));

        if (isBlueOrbit || isCard) {
          // Keep with smooth alpha ramp near card/orbit edges
          if (maxVal < 110) {
            alpha[idx] = Math.round(((maxVal - 75) / 35) * 255);
          } else {
            alpha[idx] = 255;
          }
        } else {
          // BACKGROUND SMOKE / VOID -> 100% TRANSPARENT!
          alpha[idx] = 0;
        }
        continue;
      }

      // Inside hair region:
      if (inHair) {
        // Pure background around the hair:
        if (maxVal <= 18) {
          alpha[idx] = 0;
        } else {
          alpha[idx] = 255;
        }
        continue;
      }

      // Inside torso / arms / pants:
      if (inTorso || inArms || inPants) {
        // Check if it's the background around the edges:
        if (maxVal <= 25 && isNeutral) {
          alpha[idx] = 0;
        } else {
          alpha[idx] = 255;
        }
      }
    }
  }

  // Smooth the alpha channel slightly (1-pixel feathering on transparency boundary)
  // to avoid any harsh pixelated edge
  const smoothAlpha = Buffer.alloc(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (alpha[idx] === 0) {
        smoothAlpha[idx] = 0;
      } else if (alpha[idx] === 255) {
        // Check 4 neighbors
        const n0 = alpha[idx - 1] === 0;
        const n1 = alpha[idx + 1] === 0;
        const n2 = alpha[idx - width] === 0;
        const n3 = alpha[idx + width] === 0;
        if (n0 || n1 || n2 || n3) {
          // Boundary pixel: gentle 180/255 anti-aliasing
          smoothAlpha[idx] = 195;
        } else {
          smoothAlpha[idx] = 255;
        }
      } else {
        smoothAlpha[idx] = alpha[idx];
      }
    }
  }

  // Build RGBA
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    rgba[dstIdx] = data[srcIdx];
    rgba[dstIdx+1] = data[srcIdx+1];
    rgba[dstIdx+2] = data[srcIdx+2];
    rgba[dstIdx+3] = smoothAlpha[i];
  }

  // Save to public/lego-me.png
  await sharp(rgba, {
    raw: { width, height, channels: 4 }
  })
  .png({ compressionLevel: 8 })
  .toFile('public/lego-me.png');

  console.log('Saved ultra-clean public/lego-me.png without black smudges!');
}

generateClean();
