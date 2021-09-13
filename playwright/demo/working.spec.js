const { test, expect } = require("@playwright/test");
const initialize = require("../testInitialize");
let electronApp;
let window;

test.describe("Working test", async () => {
  test.beforeAll(async () => {
    electronApp = await initialize("1AccountBTC1AccountETH");
    window = await electronApp.firstWindow();
  });

  test.afterAll(async () => {
    await electronApp.close();
  });

  test("get the app running", async () => {
    const title = await window.title();
    expect(title).toBe("Ledger Live");
  });

  test("go to accounts", async () => {
    await window.click("#drawer-accounts-button");
    await window.waitForSelector("#topbar-synchronized");
    expect(await window.screenshot()).toMatchSnapshot("accounts.png");
  });
});
