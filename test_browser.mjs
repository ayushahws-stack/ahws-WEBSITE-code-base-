import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  await page.goto('http://localhost:3000/ahws_WEBSITE-/');
  await page.waitForTimeout(2000);
  
  console.log("PAGE TITLE:", await page.title());
  
  await browser.close();
  process.exit(0);
})();
