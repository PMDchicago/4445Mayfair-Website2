const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const SOURCE = 'c:/Users/sand/.gemini/antigravity/brain/eaec632c-75fd-4b97-8a48-16c270a0f403/uploaded_image_1768132842187.png';
const APP_DIR = 'src/app';
const PUBLIC_DIR = 'public';

async function main() {
    console.log('Starting favicon generation...');

    if (!fs.existsSync(SOURCE)) {
        console.error('Source file not found:', SOURCE);
        process.exit(1);
    }

    const inputBuffer = fs.readFileSync(SOURCE);

    // 1. Generate favicon.ico (16, 32, 48)
    console.log('Generating favicon.ico...');
    const icoBuffers = await Promise.all([16, 32, 48].map(size =>
        sharp(inputBuffer)
            .resize(size, size, { kernel: 'lanczos3' })
            .png()
            .toBuffer()
    ));

    const icoFile = await toIco(icoBuffers);
    fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoFile);
    console.log(`Saved ${path.join(APP_DIR, 'favicon.ico')}`);

    // 2. Generate PNGs
    const configs = [
        { name: 'android-chrome-192x192.png', size: 192 },
        { name: 'android-chrome-512x512.png', size: 512 },
        { name: 'apple-touch-icon.png', size: 180 },
        { name: 'favicon-32x32.png', size: 32 },
        { name: 'favicon-16x16.png', size: 16 }
    ];

    console.log('Generating PNGs...');
    for (const config of configs) {
        await sharp(inputBuffer)
            .resize(config.size, config.size, { kernel: 'lanczos3' })
            .png()
            .toFile(path.join(PUBLIC_DIR, config.name));
        console.log(`Saved ${path.join(PUBLIC_DIR, config.name)}`);
    }

    console.log('Done.');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
