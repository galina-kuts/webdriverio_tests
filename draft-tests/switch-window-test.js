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

    browser.switchWindow('WebDriver | Contact Us')
    console.log('CONTACT US HEADER:' + browser.getTitle())
  });
});

