// const puppeteer = require("puppeteer");
const knex = require("knex");

const path = require('path');
const ch="hg56"
filePath = path.join(__dirname, "../../../", "public/gpx-images/"+ch+"_gpx.jpg");
console.log(filePath)

let path2 = path.dirname(filePath);

console.log(path2)
console.log(__dirname)
console.log(path.resolve(__dirname))
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://quotes.toscrape.com/");

//   await page.click('a[href="/login"]');
  
//   await page.type('#username', "Abas AbdRabu",{delay:200});
//   await page.type('#password', "passiwordi!678", {delay:100});

//   await page.click('input[type="submit"]');
  
  
//   // await browser.close();
// })();
