# Contributing to @orixen/runtimes

## Setting Up the Dev Environment

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

## Running Tests

```bash
# All tests
npm test

# Specific test suites
npm run test:typescript:base
npm run test:typescript:aws
npm run test:e2e
```

Ensure all tests pass before submitting a pull request.

## Code Style

- Tab is 2 spaces
- Follow the single responsibility principle — each function should do one thing only
- Break larger functions into smaller helpers
- Place helper functions below the main function they support

See [CLAUDE.md](CLAUDE.md) for the full style reference.

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the code style above
3. Add or update tests for any changed behavior
4. Ensure all tests pass (`npm test`)
5. Open a pull request with a clear description of the changes


## Creating a new Language / Cloud deployment

1. In a new branch, create a new directory under `src/runtimes/` named after your runtime (e.g., `myRuntime`).
2. Implement the GeneratorInterface.ts
3. Add tests in the corresponding test directory
4. Create an end to end test in `tests/e2e/` that actually makes the deploy and test it. Use the "test-project" as a reference.
5. Update the main README.md and other documentation to include your new runtime.