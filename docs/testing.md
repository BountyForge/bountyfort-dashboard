# Testing Strategy

BountyFort Dashboard uses a two-tiered testing approach: unit tests for logic and end-to-end (E2E) tests for user flows.

## Unit Testing (Vitest)
Unit tests are located in `src/tests` and focus on:
- **Formatting**: Ensuring addresses and amounts are displayed correctly.
- **Validation**: Verifying form schemas and input logic.
- **Client Mocking**: Ensuring the `BountyClient` behaves correctly in mock mode.

Run unit tests:
```bash
npm test
```

## End-to-End Testing (Playwright)
E2E tests are located in `src/e2e` and focus on:
- **Navigation**: Verifying all pages load and sidebar links work.
- **Form Submission**: Testing the bounty creation flow.
- **Interactions**: Verifying modal dialogs and buttons trigger expected UI changes.

Run E2E tests:
```bash
npm run test:e2e
```

## Adding New Tests
- For logic: Create a `.test.ts` file in `src/tests`.
- For UI flows: Create a `.spec.ts` file in `src/e2e`.
- Always mock network requests in E2E tests to ensure reliability.
