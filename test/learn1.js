const {By, Builder, Key} = require("selenium-webdriver");
require("chromedriver");

(async function f() {
  let driver = new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.google.com/");
    await driver.findElement(By.name("q")).sendKeys('VMware', Key.RETURN);

  } finally {
    await driver.quit();
  }

})();