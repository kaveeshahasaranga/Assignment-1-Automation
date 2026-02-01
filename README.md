# IT3040 Assignment 1 - Test Automation
**Registration No:** IT23228658

This project contains automated test scripts for the [SwiftTranslator](https://www.swifttranslator.com/) website using **Playwright**. It identifies valid translation scenarios and system weaknesses as per the assignment requirements.

## Project Structure
- `tests/assignment1.spec.ts`: Contains the original set of 24 test cases (Positive & Negative).
- `tests/additional_tests.spec.ts`: Contains **27 additional test cases** (18 Positive, 9 Negative) to expand coverage to 35+ unique scenarios.
- `playwright.config.ts`: Configuration for Playwright (browsers, timeouts, etc.).

## Prerequisites
- Node.js installed
- VS Code installed

## How to Install
1. Clone this repository (or unzip the submission folder).
2. Open the terminal in the project folder and run:
   ```bash
   npm install
   npx playwright install
   ```

## How to Run Tests

### Run All Tests (Recommended)
To verify all 51 test cases (Original + Expanded compliance suite):
```bash
npx playwright test
```

### Run Original Assignment Tests Only
```bash
npx playwright test tests/assignment1.spec.ts
```

### Run Expanded Coverage Tests Only
```bash
npx playwright test tests/additional_tests.spec.ts
```

### View Test Report
After running tests, a report is usually generated automatically. You can always view it manually:
```bash
npx playwright show-report
```

## Test Coverage
The suite covers:
1.  **Sentence Structures**: Simple, Compound, Complex.
2.  **Grammar**: Tenses (Past/Present/Future), Negation, Singular/Plural.
3.  **Input Types**: Short, Medium, Long, Mixed Language, Slang, Punctuation.
4.  **Failure Scenarios**: Identified weaknesses in long string handling and URL parsing.