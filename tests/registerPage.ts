import { ClientFunction, Selector } from "testcafe";
import registerPage from "../pageObjects/registerPage";

fixture`Register Page`.page("./account/register").beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Make Register", async (t) => {
  await registerPage.doRegister(
    registerPage.generateRandomLogin(),
    "qwerty",
    "Geralt",
    "Rivia",
    registerPage.generateRandomLogin() + "@gmail.com"
  );
  await t.expect(await registerPage.successRegisterNotification.visible).ok();
});

test("Make Failed Register", async (t) => {
  await registerPage.doRegister(
    registerPage.generateRandomLogin(),
    "qwerty",
    "Geralt",
    "Rivia",
    registerPage.generateRandomLogin() + "gmail.com"
  );
  await t.expect(await registerPage.registerError.visible).ok();

  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains("/account/register");
});
