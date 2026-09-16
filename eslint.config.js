import js from "@eslint/js";
import importPlugin from "eslint-plugin-import-x";
import oxfmtPlugin from "eslint-plugin-oxfmt";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importSortPlugin from "eslint-plugin-simple-import-sort";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  oxfmtPlugin.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-expect-error": "allow-with-description" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "never",
        },
      ],
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-as-const": "error",
    },
  },
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs,mts,cts,css,json,jsonc,html}"],
    plugins: {
      import: importPlugin,
      "import-sort": importSortPlugin,
    },
    rules: {
      eqeqeq: "error",
      "max-depth": ["error", 5],
      "max-lines": ["error", 300],
      "max-params": ["error", 4],
      complexity: ["error", 15],
      "prefer-const": "error",
      "prefer-template": "error",
      "object-shorthand": "error",
      "arrow-body-style": "error",
      "no-shadow": "error",
      "no-restricted-exports": [
        "error",
        { restrictDefaultExports: { direct: true, defaultFrom: true, namedFrom: true } },
      ],
      "no-alert": "error",
      "no-case-declarations": "error",
      "no-console": ["error", { allow: ["warn", "error", "info", "trace"] }],
      "no-constant-condition": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-magic-numbers": ["error", { ignore: [-1, 0, 1] }],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-self-import": "error",
      "import/no-duplicates": "error",
      "import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports
            ["^\\u0000"],
            // Node.js builtins prefixed with `node:`
            ["^node:"],
            // Packages
            ["^@?\\w"],
            // Internal packages.
            ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,js}"],
    rules: {
      "max-lines-per-function": ["error", 50],
    },
  },
]);
