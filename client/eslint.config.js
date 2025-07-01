import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"
import reactplug from "eslint-plugin-react"
export default tseslint.config(
  { ignores: ["vite-env.d.ts", "vite.config.ts", "*.cjs", ".eslint*"] },
  eslint.configs.recommended,
  { plugins: { ["react"]: reactplug } },
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
      },
    },
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-imports": "off",
    },
  }
)
