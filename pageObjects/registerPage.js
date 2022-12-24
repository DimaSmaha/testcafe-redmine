import { Selector, t } from "testcafe";

class RegisterPage {
  generateRandomLogin() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  constructor() {
    this.loginInput = Selector('[id="user_login"]');
    this.passInput = Selector('[id="user_password"]');
    this.passConfirmInput = Selector('[id="user_password_confirmation"]');
    this.firstnameInput = Selector('[id="user_firstname"]');
    this.lastnameInput = Selector('[id="user_lastname"]');
    this.emailInput = Selector('[id="user_mail"]');
    this.submitRegisterBtn = Selector('[type="submit"]');
    this.successRegisterNotification = Selector('[id="flash_notice"]');
    this.registerError = Selector('[id="errorExplanation"]');
  }

  async doRegister(username, pass, name, surname, email) {
    await t.typeText(this.loginInput, username);
    await t.typeText(this.passInput, pass);
    await t.typeText(this.passConfirmInput, pass);
    await t.typeText(this.firstnameInput, name);
    await t.typeText(this.lastnameInput, surname);
    await t.typeText(this.emailInput, email);
    await t.click(this.submitRegisterBtn);
  }
}

export default new RegisterPage();
