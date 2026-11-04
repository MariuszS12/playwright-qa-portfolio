# Playwright QA Portfolio

[![Playwright Tests](https://github.com/MariuszS12/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/MariuszS12/playwright-qa-portfolio/actions/workflows/playwright.yml)

End-to-end UI test automation for a demo web shop ([saucedemo.com](https://www.saucedemo.com)), written in **Playwright** and **TypeScript**. The project uses the Page Object Model, custom fixtures and BDD scenarios (Gherkin), and runs in CI with GitHub Actions.

## Tech stack

- Playwright (Chromium, Firefox)
- TypeScript
- Cucumber.js (BDD, Gherkin)
- GitHub Actions (CI)

## What is tested

- **Login:** valid login, wrong password, locked-out user, empty fields
- **Cart:** adding products, cart badge counter, products visible in the cart
- **Checkout:** filling in customer data and completing an order
- **BDD scenarios:** login scenarios written in Gherkin (`features/`)

## Project structure

```
├── .github/workflows/playwright.yml   CI pipeline
├── features/                          Gherkin scenarios (BDD)
├── steps/                             Cucumber step definitions
├── support/                           Cucumber World and hooks
├── fixtures/                          Playwright custom fixtures
├── pages/                             Page Objects (Login, Inventory, Cart, Checkout)
├── test-data/                         Users and products
├── tests/ui/                          Playwright test specs
├── cucumber.js                        Cucumber configuration
└── playwright.config.ts               Playwright configuration
```

## Getting started

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/MariuszS12/playwright-qa-portfolio.git
cd playwright-qa-portfolio
npm install
npx playwright install
```

## Running the tests

```bash
npm test                      # Playwright tests (all browsers)
npx playwright test --ui      # interactive UI mode
npx playwright test --headed  # visible browser
npm run test:bdd              # Cucumber BDD scenarios
npm run test:bdd:smoke        # BDD scenarios tagged @smoke
npx playwright show-report    # open the HTML report
```

## CI/CD

Tests run on every push and pull request using GitHub Actions. The Playwright HTML report is uploaded as a build artifact (Actions tab, then the latest run, then Artifacts).

## Design decisions

- **Page Object Model:** locators and actions live in `pages/`, so tests only describe scenarios.
- **Fixtures:** reusable setup (for example an already logged-in user) keeps tests short and independent.
- **Test data in one place:** `test-data/` avoids hardcoded values in tests.
- **Stable locators:** `data-test` attributes via `getByTestId`.

## Roadmap

- [ ] API tests (restful-booker)
- [ ] Allure report
- [ ] Reuse login session with `storageState`
- [ ] Publish the report on GitHub Pages

## Author

Mariusz Samborski, QA Engineer. [GitHub](https://github.com/MariuszS12) | [LinkedIn](https://linkedin.com/in/mariusz-samborski)
