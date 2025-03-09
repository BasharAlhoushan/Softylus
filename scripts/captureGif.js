import puppeteer from 'puppeteer';
import GIFEncoder from 'gif-encoder-2';
import fs from 'fs/promises';
import PNG from 'png-js';

async function captureGif() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 1
  });

  // Navigate to signature page
  await page.goto('http://localhost:4321/signature', {
    waitUntil: 'networkidle0'
  });

  // Create GIF encoder
  const encoder = new GIFEncoder(800, 600);
  encoder.setDelay(50); // 50ms delay between frames
  encoder.setQuality(10); // Lower quality for smaller file size
  encoder.setRepeat(0); // Loop forever
  encoder.start();

  // Capture frames for 5 seconds
  const duration = 5000; // 5 seconds
  const frameInterval = 50; // Capture every 50ms
  const frames = duration / frameInterval;

  console.log('Capturing frames...');

  for (let i = 0; i < frames; i++) {
    const screenshot = await page.screenshot({
      type: 'png'
    });

    // Convert screenshot to pixels
    const png = new PNG(screenshot);
    const pixels = await new Promise(resolve => {
      png.decode(pixels => resolve(pixels));
    });

    // Add frame to GIF
    encoder.addFrame(pixels);
    
    // Wait for next frame
    await page.waitForTimeout(frameInterval);
    
    // Log progress
    console.log(`Captured frame ${i + 1}/${frames}`);
  }

  encoder.finish();

  // Save GIF
  const buffer = encoder.out.getData();
  await fs.writeFile('public/signature-animation.gif', buffer);

  console.log('GIF saved to public/signature-animation.gif');

  await browser.close();
}

// Run the capture
try {
  console.log('Starting GIF capture...');
  await captureGif();
  console.log('GIF capture completed successfully!');
} catch (error) {
  console.error('Error capturing GIF:', error);
  process.exit(1);
}