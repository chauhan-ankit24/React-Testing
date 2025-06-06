import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
      ...jestDom.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
