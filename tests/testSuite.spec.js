import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TaskBoardPage } from "../pages/TaskBoardPage";
import testData from "../data/testCases.json";

test.describe("Asana Test Suite", () => {
  testData.testCases.forEach(({ navigation, task, column, tags }) => {
    test(`Verify task "${task}" in "${column}" column with correct tags`, async ({
      page,
    }) => {
      const loginPage = new LoginPage(page);
      const taskBoardPage = new TaskBoardPage(page);

      // Log in to the application
      const { url, email, password } = testData.login;
      await loginPage.navigate(url);
      await loginPage.login(email, password);

      // Navigate to the project
      await taskBoardPage.navigateToProject(navigation);

      // Locate the task and verify tags
      const taskLocator = await taskBoardPage.locateTask(column, task);
      await taskBoardPage.verifyTags(taskLocator, tags);
    });
  });
});
