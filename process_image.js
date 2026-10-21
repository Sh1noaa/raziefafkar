import sharp from 'sharp';

async function processLego() {
  const imgPath = 'C:/Users/ACER/.gemini/antigravity-ide/brain/65f71ea8-7dfa-4a77-bfa2-d3d47b7750d7/.user_uploaded/media_1792471397876.jpg';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const isBackground = new Uint8Array(width * height);
  const queue = [];

  function trySeed(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (isBackground[idx]) return;

    const pIdx = idx * channels;
    const maxVal = Math.max(data[pIdx], data[pIdx+1], data[pIdx+2]);
    if (maxVal <= 6) {
      isBackground[idx] = 1;
      queue.push(x, y);
    }
  }

  // Seed outer borders
  for (let x = 0; x < width; x++) {
    trySeed(x, 0);
    if (x < width * 0.25 || x > width * 0.75) {
      trySeed(x, height - 1);
    }
  }
  for (let y = 0; y < height; y++) {
    trySeed(0, y);
    trySeed(width - 1, y);
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];

    const neighbors = [
      [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!isBackground[nIdx]) {
          const npIdx = nIdx * channels;
          const maxVal = Math.max(data[npIdx], data[npIdx+1], data[npIdx+2]);
          if (maxVal <= 14) {
            isBackground[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  console.log(`Visited background: ${queue.length / 2} out of ${width * height}`);

  // Build RGBA
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx+1];
    const b = data[srcIdx+2];

    rgba[dstIdx] = r;
    rgba[dstIdx+1] = g;
    rgba[dstIdx+2] = b;

    if (isBackground[i]) {
      rgba[dstIdx+3] = 0;
    } else {
      const maxVal = Math.max(r, g, b);
      if (maxVal < 30) {
        const factor = Math.max(0, Math.min(1, (maxVal - 14) / 16));
        rgba[dstIdx+3] = Math.round(factor * 255);
      } else {
        rgba[dstIdx+3] = 255;
      }
    }
  }

  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png({ compressionLevel: 8 })
  .toFile('public/lego-me.png');

  console.log('Saved new transparent public/lego-me.png!');
}

processLego();
