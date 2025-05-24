import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async navigateToForums() {
    await this.page.goto("/");
    await this.page.getByRole("button", { name: "Support" }).click();
    const forumLink = this.page.getByRole("link", { name: "R&D Forums" });
    await forumLink.waitFor({ state: "visible", timeout: 5000 });
    await this.page.getByRole("link", { name: "R&D Forums" }).click();
  }
}
