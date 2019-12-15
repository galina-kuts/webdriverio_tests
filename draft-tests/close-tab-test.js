const assert = require("assert");

describe("Selectors test", () => {
  beforeEach(function() {
    browser.url("./")
  });
  it("By ID", () => {
    const clickById = $("#contact-us");
    clickById.click();

    console.log('HOMEPAGE HEADER:' + browser.getTitle())
    browser.pause(2000);

    browser.switchWindow('WebDriverUniversity.com')
    console.log('CONTACT US HEADER:' + browser.getTitle())
    browser.closeWindow()
    browser.pause(2000);
  });
});

