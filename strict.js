module.exports = {
  plugins: ["import"],
  extends: "./all",
  rules: {
    /*
     * Strict config of import order.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          orderImportKind: "asc",
        },
      },
    ],

    /*
     * This rule is conflict with `import/prefer-default-export`.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     */
    "import/no-default-export": "off",

    /*
     * Disable this to make export more convenient.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
     */
    "import/no-named-export": "off",

    /*
     * Deeper folder structure can improve better project organization.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
     */
    "import/no-internal-modules": "off",

    /*
     * For typescript project, we need to import type from parent folder.
     * There is an issue about this - https://github.com/import-js/eslint-plugin-import/issues/2889
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
     */
    "import/no-relative-parent-imports": "off",

    /*
     * Config to accept unassigned css import.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
     */
    "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],

    /*
     * Since type import is duplicate, we should not count them in.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
     */
    "import/max-dependencies": ["error", { ignoreTypeImports: true }],
  },
};
