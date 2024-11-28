export const waitForText = async (locator, text) => {
  await locator.waitFor({ state: "visible" });
  const actualText = await locator.textContent();
  if (!actualText.includes(text)) {
    throw new Error(
      `Expected text "${text}" not found. Actual: "${actualText}"`
    );
  }
};
