const assert = require("assert");

describe("Chai assertions", () => {
  beforeEach(function() {
    browser.url("./")
  });
  it("Test webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    browser.switchWindow('WebDriver | Login Portal')

    const loginPageTitle = browser.getTitle();
    const loginPageUrl = browser.getUrl();

    expect(loginPageTitle).to.contains('Login Portal');
    expect(loginPageUrl).to.contains('Login-Portal');
  });
});
