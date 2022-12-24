import { Selector } from "testcafe";
import registerPage from "../pageObjects/registerPage";

fixture`Users Guide Page`.page("./account/register");

test("Make Register", async (t) => {
  await t.maximizeWindow();
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
  await t.maximizeWindow();
  await registerPage.doRegister(
    registerPage.generateRandomLogin(),
    "qwerty",
    "Geralt",
    "Rivia",
    registerPage.generateRandomLogin() + "gmail.com"
  );
  await t.expect(await registerPage.registerError.visible).ok();
});
