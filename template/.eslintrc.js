module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "plugin:react/recommended",
        "google",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "@react-native-community",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "react-native/no-inline-styles": "off",
        "no-duplicate-imports": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/ban-ts-comment": "off",
        "no-shadow": 0,
        "react-native/no-unused-styles": 2,
        "react-native/no-color-literals": 2,
        "react-native/no-single-element-style-arrays": 2,
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "internal", ["sibling", "parent"]],
            "pathGroups": [
              {
                "pattern": "react",
                "group": "external",
                "position": "before",
              },
              {
                "pattern": "react-native",
                "group": "external",
                "position": "before",
              },
            ],
            "pathGroupsExcludedImportTypes": ["builtin"],
            "newlines-between": "always",
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": true,
            },
          },
        ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [
            ".js",
            ".jsx"
          ]
        },
        typescript: true,
        alias: {
          map: [
            ['@assets', './src/assets'],
            ['@components', './src/components'],
            ['@constants', './src/constants'],
            ['@enums', './src/enums'],
            ['@hooks', './src/hooks'],
            ['@models', './src/models'],
            ['@navigators', './src/navigators'],
            ['@redux', './src/redux'],
            ['@screens', './src/screens'],
            ['@services', './src/services'],
            ['@theme', './src/theme'],
            ['@utils', './src/utils'],
          ],
          extensions: ['.ts', '.tsx', '.ios.ts', '.android.ts', '.json'],
        },
      },
      'import/ignore': ['react-native'],
    },
}
