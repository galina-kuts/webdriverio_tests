const assert = require("assert");

describe("Add Command", () => {
  beforeEach(function() {
    browser.url("./")
  });
  it("Test webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    browser.switchWindow('WebDriver | Login Portal')

    // const loginPageTitle = browser.getTitle();
    // const loginPageUrl = browser.getUrl();

    const loginPageData = browser.getUrlAndTitle();

    expect(loginPageData.title).to.contains('Login Portal');
    expect(loginPageData.url).to.contains('Login-Portal');
  });
});
