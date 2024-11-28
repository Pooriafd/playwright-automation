export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[type="email"]';
    this.continueButton = 'role=button[name="Continue"]';
    this.passwordInput = 'input[type="password"]';
    this.loginButton = 'role=button[name="Log in"]';
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);

    await this.page.waitForSelector(this.passwordInput);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    await this.page.waitForNavigation(); // Ensure login completes
  }
}
