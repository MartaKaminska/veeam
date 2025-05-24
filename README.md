# Veeam UI E2E Test (Playwright + TypeScript)

This is a UI end-to-end test project created as part of a technical assessment for the Junior SDET role at **Veeam Software**. The test uses **Playwright** with **TypeScript** and follows the **Page Object Model (POM)** pattern.

---

## 🧪 Test Scenario

The automated test verifies the following flow on [https://www.veeam.com](https://www.veeam.com):

1. Navigate to the homepage.
2. Go to **Support → R&D Forums**.
3. Click **Register**.
4. Fill in the registration form with:
   - Name: `InterviewUser`
   - Password: `InreviewUser`
   - Email: `inreviewuser@gmail.com`
5. Submit the form.
6. Validate that an error message appears, stating public email domains (like Gmail) are not allowed.

---


## 📁 Project Structure

- `pages/` – Page Object classes:
  - `HomePage.ts`
  - `ForumRegisterPage.ts`
- `tests/` – Playwright test scenarios:
  - `registration.spec.ts`
- `playwright.config.ts` – Playwright configuration
- `tsconfig.json` – TypeScript configuration
- `package.json` – Project dependencies and scripts
- `package-lock.json` – Project dependencies and scripts
- `README.md` – Project documentation
- `.gitignore` – Files to ignore by git

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MartaKaminska/veeam.git
```


### 2. Install dependencies

Install all required Node.js packages using npm:

```bash
npm install
```

### 3. Run tests

To run the tests, you can use one of the following options:

Run tests using the Playwright CLI:

```bash
npx playwright test
```

Run tests using the predefined script in package.json:

```bash
npm run test
```

Run tests with the Playwright UI (headed mode with test selection):

```bash
npm run ui
```



