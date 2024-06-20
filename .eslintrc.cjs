module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      ts: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks", "simple-import-sort", "prettier", "import-path-lint-plugin", "unused-imports"],
  rules: {
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx", ".ts"] }],
    "react/no-unstable-nested-components": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "no-restricted-globals": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "no-shadow": "off",
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "react/no-unused-prop-types": "warn",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies,
    "no-param-reassign": "off",
    "consistent-return": "warn",
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "object-curly-spacing": ["error", "always"],
    "react/destructuring-assignment": 'warn',
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(scss)$"]
        ]
      }
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_",
      },
    ],
    "import-path-lint-plugin/path-checker": ["error", { alias: "@" }],
    "import-path-lint-plugin/layer-imports": ["error", {
      alias: "@",
      ignoreCase: ["**/StoreProvider", "**/testing"]
    }],
    "import-path-lint-plugin/public-import": ["error", {
      alias: "@",
      testingPattern: ["**/StoreDecorator.tsx", "**/*.test.*", "**/*.story.*"]
    }],
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to", "**/*.stories.*"]
      }
    ]
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  ignorePatterns: ["**/*.stories.*"],
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": 0,
        "max-len": 0
      },
    },
  ],

};
