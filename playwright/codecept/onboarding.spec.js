Feature("onboarding");

Scenario("Onboarding", async ({ I }) => {
  I.waitForNavigation();
  I.waitForVisible("#onboarding-get-started-button", 5);
  I.saveScreenshot("before.png");
  I.click("#onboarding-get-started-button");
  I.saveScreenshot("after.png");
});
