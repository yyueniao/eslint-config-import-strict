# eslint-config-import-strict

[![npm version](https://img.shields.io/npm/v/eslint-config-import-strict)](https://www.npmjs.com/package/eslint-config-import-strict)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-import-strict)](https://www.npmjs.com/package/eslint-config-import-strict)
[![License](https://img.shields.io/npm/l/eslint-config-import-strict)](https://github.com/yourusername/eslint-config-import-strict/blob/main/LICENSE)

ESLint shareable configuration for strict import rules.

## Overview

`eslint-config-import-strict` is an ESLint shareable configuration designed to enforce strict import rules in your JavaScript or TypeScript projects. It currently provides only one rule set `import-strict/all` which enables all existing ESLint [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) rules without any further configuration. This means that it enforces best practices and consistency for imports in your codebase, but it does not impose opinionated style choices or additional rules.

**Note:** It is strongly recommended to lock the patch version of this configuration in your project's dependencies. Even minor patch updates may introduce lint errors, so keeping the version locked ensures that your code remains consistent.

Your `package.json` should look like this:

```json
"eslint-config-import-strict": "1.0.0" // Replace `1.0.0` to the specific version you are using
```

## Installation

To use `eslint-config-import-strict` in your project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install eslint-config-import-strict --save-dev --save-exact
```

or

```bash
yarn add eslint-config-import-strict --dev --exact
```

2. Create an ESLint configuration file (e.g., `.eslintrc.js` or `.eslintrc.json`) in your project and extend the `import-strict/all` rule set:

   ```json
   {
     "extends": [
       // other rule set
       "import-strict/all"
     ]
   }
   ```

   This will apply all the import rules to your project.
