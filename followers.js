const puppeteer = require("puppeteer");

const user = "itsme.get401";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/" + user + "/");
  // await page.screenshot({ path: "example.png" });
  const userName = await page.evaluate(
    () => document.querySelector("h1").textContent
  );

  const followersNumber = await page.evaluate(() =>
    document
      .querySelectorAll("li")[1]
      .querySelector("span")
      .getAttribute("title")
  );

  console.log(`${userName} - ${followersNumber}`);

  await browser.close();
})();
