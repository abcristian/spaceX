module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@react-native-community",
    "plugin:react-native-a11y/basic",
    "prettier",
    "plugin:json/recommended-with-comments",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  globals: {
    JSX: true,
    React: true,
  },
  ignorePatterns: ["/coverage"],
  overrides: [
    {
      files: ["./tsconfig.json"],
      rules: {
        "json/comment-not-permitted": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  plugins: [
    "@typescript-eslint",
    "react",
    "react-native",
    "react-hooks",
    "prettier",
    "sort-keys-fix",
    "simple-import-sort",
  ],
  // ESLint will stop looking in parent folders once it finds a configuration with "root": true
  // https://eslint.org/docs/7.0.0/user-guide/configuring
  root: true,
  rules: {
    "arrow-body-style": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "__tests__/*.tsx",
          "**/*.detox.tsx",
          "./src/detox-init.ts",
          "**/*.unit.tsx",
          "**/*.snapshot.tsx",
          "**/*.rntl.tsx",
          "./src/storybook/*.ts",
          "./src/**/*.stories.tsx",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "linebreak-style": ["error", "unix"],
    "no-console": "error",
    "no-undef": "error",
    "no-unused-vars": "error",
    "prefer-arrow-callback": "off",
    "prettier/prettier": "error",
    // quotes: ["error", "double"],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-unused-styles": "error",
    semi: ["error", "always"],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-keys-fix/sort-keys-fix": [
      "error",
      "asc",
      {caseSensitive: false, natural: true},
    ],
    "sort-vars": "error",
  },
  settings: {
    // It is workaround to disable errors of eslint not finding dependencies for React Native
    // https://stackoverflow.com/questions/60973737/eslint-does-not-find-react-native-components
    "import/ignore": ["react-native"],

    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
    // Used to align eslint for "eslint-plugin-react"
    // https://github.com/yannickcr/eslint-plugin-react/pull/1978/files
    react: {
      version: "detect",
    },
  },
};
