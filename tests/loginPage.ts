import { Selector } from "testcafe";
import loginPage from "../pageObjects/loginPage";

fixture`Login Page`.page("./").skipJsErrors();

test("Make Login", async (t) => {
  await t.maximizeWindow();
  await t.click('[class="login"]');
  await loginPage.doLogin("babalen", "qwerty");
  await t.expect(Selector('[id="loggedas"]').id).eql("loggedas");
});
