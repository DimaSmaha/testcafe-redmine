import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.loginInput = Selector('[id="username"]');
    this.passInput = Selector('[id="password"]');
    this.loginBtn = Selector('[type="submit"]');
  }

  async doLogin(username, pass) {
    await t.typeText(this.loginInput, username);
    await t.typeText(this.passInput, pass);
    await t.click(this.loginBtn);
  }
}

export default new LoginPage();
