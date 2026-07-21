// generate-favicons.js
// Generates optimized PNG favicons from `assets/logo.jpeg` into `assets/icons/`.
// Usage: `node ./scripts/generate-favicons.js` or `npm run generate:assets` after installing dependencies.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const src = path.resolve(__dirname, '../assets/logo.jpeg');
const srcFull = path.resolve(__dirname, '../assets/logo_with_Name.jpeg');
const outDir = path.resolve(__dirname, '../assets/icons');

if (!fs.existsSync(src)) {
  console.error('Source image not found at', src);
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// PNG sizes to generate
const pngSizes = [16, 32, 48, 64, 128, 256, 512];

(async () => {
  try {
    // generate PNG favicons
    for (const size of pngSizes) {
      const out = path.join(outDir, `favicon-${size}.png`);
      await sharp(src)
        .resize(size, size, { fit: 'cover' })
        .png({ quality: 90 })
        .toFile(out);
      console.log('Written', out);
    }

    // apple touch icon (180)
    const appleOut = path.join(outDir, 'apple-touch-icon.png');
    await sharp(src)
      .resize(180, 180, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(appleOut);
    console.log('Written', appleOut);

    // optimized full logo variants from logo_with_Name.jpeg (if present)
    if (fs.existsSync(srcFull)) {
      const fullOutSmall = path.join(outDir, 'logo-180.png');
      const fullOutLarge = path.join(outDir, 'logo-512.png');
      await sharp(srcFull).resize(180, 180, { fit: 'contain', background: { r:255,g:255,b:255,alpha:0 } }).png({ quality: 90 }).toFile(fullOutSmall);
      await sharp(srcFull).resize(512, 512, { fit: 'contain', background: { r:255,g:255,b:255,alpha:0 } }).png({ quality: 90 }).toFile(fullOutLarge);
      console.log('Written', fullOutSmall, fullOutLarge);
    }

    // create multi-resolution favicon.ico using a subset of generated PNGs
    const icoSources = [16, 32, 48, 64, 128].map(s => path.join(outDir, `favicon-${s}.png`));
    const icoBuffer = await pngToIco(icoSources);
    const icoPath = path.join(outDir, 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Written', icoPath);

    console.log('All assets generated in', outDir);
  } catch (err) {
    console.error('Image generation failed:', err);
    process.exit(2);
  }
})();
