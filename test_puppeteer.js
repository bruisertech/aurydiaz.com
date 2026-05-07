const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/index.html', {waitUntil: 'networkidle0'});
  await page.screenshot({path: '/tmp/file_attachments/test_screenshot.png'});
  await browser.close();
})();
