import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // Base configurations using compat for complex extends
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ),

  // Main configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        __dirname: "readonly",
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        global: "readonly",
      },
    },

    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier,
      import: importPlugin,
      react,
      "jsx-a11y": jsxA11y,
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      // Prettier
      "prettier/prettier": "warn",

      // TypeScript rules
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-inferrable-types": [
        "error",
        { ignoreProperties: true }
      ],
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false }
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-expect-error": "allow-with-description" }
      ],
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" }
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",

      // Import rules
      "import/no-named-as-default-member": "off",
      "import/no-extraneous-dependencies": "off",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      // React rules
      "react/boolean-prop-naming": [
        "error",
        { rule: "^(is|has|should|can|are|have)[A-Z]([A-Za-z0-9]?)+" }
      ],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-curly-spacing": "error",
      "react/jsx-closing-bracket-location": "error",
      "react/jsx-closing-tag-location": "error",
      "react/jsx-tag-spacing": "error",
      "react/jsx-boolean-value": "error",
      "react/self-closing-comp": "error",
      "react/react-in-jsx-scope": "off",

      // JSX A11y rules
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "warn",

      // General rules
      "no-empty-function": "off",
      "eol-last": ["error", "always"],
      "curly": ["error", "all"],
    },
  },

  // Ignore patterns
  {
    ignores: [
      "dist/*",
      ".next/**",
      "node_modules/**",
      ".yarn/**",
      "eslint.config.js",
    ],
  },
];

export default eslintConfig;
