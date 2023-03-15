require("chromedriver");
const {By, Builder, Key} = require("selenium-webdriver");

(async function f() {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.get("https://ratings.fide.com/top.phtml");
  const players  = await driver.findElements(By.css(".tur"));
  players.forEach(async (player) => console.log(await player.getText()));
  setTimeout(()  => driver.quit(), 5000);
})();