import { Page, expect } from "@playwright/test";

export class ForumRegisterPage {
  constructor(private page: Page) {}

  async moveToRegister() {
    await this.page.getByRole("menuitem", { name: "Register" }).click();
    const forumsAgreement = this.page.locator("#agreement");
    expect(forumsAgreement).toBeVisible();
    await this.page.locator("#agreed").click();
  }

  async fillRegistrationForm() {
    await this.page.fill("#username", "InterviewUser");
    await this.page.fill("#new_password", "InreviewUser");
    await this.page.fill("#password_confirm", "InreviewUser");
    await this.page.fill("#email", "inreviewuser@gmail.com");
  }

  async submitForm() {
    await this.page.click('input[type="submit"]');
  }

  async expectEmailDomainError() {
    await expect(
      this.page.locator("text=Public email are not allowed")
    ).toBeVisible();
  }
}
