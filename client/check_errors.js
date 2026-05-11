const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:3000/ministries/ffck', { waitUntil: 'networkidle2' });
  
  // Wait a bit to see if any errors pop up
  await new Promise(r => setTimeout(r, 2000));
  
  const bodyHTML = await page.evaluate(() => document.body.innerHTML);
  console.log('BODY LENGTH:', bodyHTML.length);
  console.log('FIRST 500 CHARS OF BODY:', bodyHTML.substring(0, 500));
  
  await browser.close();
})();
