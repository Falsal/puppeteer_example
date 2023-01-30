// These are 3 excercises in here , then move to index.js for more excercise
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // await page.goto("https://coconto.com/"); // for examples 1 and 2
  await page.goto("https://quotes.toscrape.com/");
  // await page.screenshot({path : "coconto_screenshot.png"}); // for examples 1 and 2

  // example 3
  const grabQuotes = await page.evaluate(() => {
    const externalPointer = document.querySelectorAll(".quote"); // now quoteLevel is an array of pointers to all quote sets
    const storedQuotes = [];

    externalPointer.forEach((quote) => {
      const internalPointer = quote.querySelectorAll("span");
      const quoteText = internalPointer[0].innerText;

      const quoteAuthorPointer = internalPointer[1];
      const author = quoteAuthorPointer.querySelector("small").innerText;

      storedQuotes.push({
        Quote: quoteText,
        Author: author,
      });
    });
    return storedQuotes;
    // return storedQuotes;
  });
  console.log(grabQuotes);
  // const grabParagraph = await page.evaluate(()=> {
  //example 1:
  // const mainLineTag = document.querySelector(".mcnTextContent span");
  // const mainText = mainLineTag.innerHTML;
  // return mainText;

  // //example 2:
  // const listItems = document.querySelectorAll(".mcnTextContentContainer.mcnTextContent ul li");
  // const listText = [];
  // listItems.forEach((tagItem)=>{
  //     listText.push(tagItem.innerText);
  // })
  // return listText;
  // })
  // console.log(grabParagraph);

  await browser.close();
})();
