const { Builder, By, Key, util, assert } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser("firefox").build();
driver.get("https://library-app.firebaseapp.com");

driver
  .findElement(By.className("btn"))
  .getText()
  .then((txt) => {
    console.log("The text on the only button on the home page  is : " + txt);
  });
driver.findElements(By.className("navbar-nav")).then((elements) => {
  elements.map((el) => {
    el.getText().then((txt) => {
      console.log(txt);
    });
  });
});
