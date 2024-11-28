import { expect } from "@playwright/test";

export class TaskBoardPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToProject(projectName) {
    await this.page.click(`text=${projectName}`);
    await this.page.waitForSelector(`text=${projectName}`);
  }

  async locateTask(column, task) {
    const columnHeader = this.page.getByRole("heading", { name: column });
    await expect(columnHeader).toBeVisible();

    const taskLocator = columnHeader
      .locator("..")
      .locator("..")
      .locator(`span.BoardCard-taskName:has-text("${task}")`);

    await expect(taskLocator).toBeVisible();
    return taskLocator;
  }

  async verifyTags(taskLocator, tags) {
    for (const tag of tags) {
      const tagLocator = taskLocator
        .locator("..")
        .locator("..")
        .locator("..")
        .locator(
          `div.BoardCardCustomPropertiesAndTags-cellWrapper:has-text("${tag}")`
        );

      await expect(tagLocator).toBeVisible();
    }
  }
}
