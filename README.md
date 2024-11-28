# Playwright Automation Framework

## Overview

This project is an automated testing framework built using [Playwright](https://playwright.dev/). It is designed to test UI functionalities with a focus on clean code, reusable components, and dynamic data-driven test cases. The framework implements the **Page Object Model (POM)** to improve test structure and maintainability.

---

## Features

- **Page Object Model (POM)**: Encapsulates UI interactions within dedicated classes to promote reusability and maintainability.
- **Dynamic Locators**: Uses Playwright’s robust selectors like `getByRole`, `hasText`, and `locator` for reliable test execution.
- **Data-Driven Tests**: Test cases are powered by external JSON data, making it easy to extend and modify test scenarios.
- **Reusable Helpers**: Common functionalities like login, navigation, and task location are abstracted into reusable methods to avoid redundancy.
- **Cross-Browser Support**: Leverage Playwright’s capabilities to run tests across Chromium, WebKit, and Firefox.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Playwright](https://playwright.dev/) (latest version)

To install dependencies, run:

```bash
npm install
```

---

## Project Structure

```plaintext
├── pages/
│   ├── LoginPage.js            # Handles login-related methods
│   ├── TaskBoardPage.js             # Handles task and column interactions
├── tests/
│   ├── testSuite.spec.js       # Main test suite
├── helpers/
│   ├── utilities.js       # Utility file to contain repetetive functions
├── data/
│   ├── testCases.json          # External data for test cases
├── playwright.config.js        # Playwright configuration
├── README.md                   # Project documentation
```

### `pages/`

This directory contains page object classes encapsulating interactions with specific sections of the application (e.g., Login Page, Task Page).

### `data/`

The `testCases.json` file contains test data used for driving test cases.

### `tests/`

The main test suite (`testSuite.spec.js`) defines test scenarios using the helper methods and data-driven approach.

---

## Running Tests

To execute the test suite, run:

```bash
npx playwright test
```

### Additional Options

- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- Run tests for a specific file:
  ```bash
  npx playwright test tests/testSuite.spec.js
  ```

---

## Best Practices

- **Page Object Model**: Keep locators and actions encapsulated in page classes for better test readability and maintainability.
- **Use Assertions Wisely**: Ensure each test has clear, meaningful assertions.
- **Parameterize Tests**: Use test data from external sources (e.g., JSON files) to improve scalability.

---
