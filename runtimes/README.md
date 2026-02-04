# @orixen/runtimes

Code generation library for Orixen projects — generates TypeScript and Terraform code for deploying serverless applications on AWS.

## Prerequisites

- Node.js >= 18
- TypeScript

## Installation

```bash
npm install
```

## Usage

The CLI accepts three positional arguments: `<project-path> <runtime> <command>`.

### Generate library code (local development)

```bash
npm run generate:local
# or directly:
npx ts-node main.ts <project-path> local generate-lib
```

### Generate deploy code (AWS)

```bash
npm run generate:aws
# or directly:
npx ts-node main.ts <project-path> aws deploy
```

The AWS region defaults to `us-east-1` and can be overridden with the `AWS_REGION` environment variable:

```bash
AWS_REGION=eu-west-1 npm run generate:aws
```

## Project Structure

```
runtimes/
├── main.ts                   # CLI entry point
├── filesystem/               # File system abstraction
├── lib/
│   ├── GeneratorInterface.ts # Core generator interface
│   ├── terraform/            # Terraform serialization utilities
│   └── typescript/
│       ├── common/           # Shared TypeScript generation logic
│       └── aws/              # AWS-specific code generation
│           └── terraform/    # AWS Terraform resource definitions
└── test/                     # Test suite
```

## Running Tests

```bash
# Run all tests
npm test

# Run TypeScript base tests only
npm run test:typescript:base

# Run AWS-specific tests
npm run test:typescript:aws

# Run end-to-end tests
npm run test:e2e
```

## License

Sustainable Use License — see [LICENSE.md](LICENSE.md) for details.
