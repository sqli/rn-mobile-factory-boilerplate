module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@react-native',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  globals: {
    JSX: 'readonly',
  },
  rules: {
    'react-native/no-inline-styles': 'off',
    'no-duplicate-imports': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-shadow': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'react/no-unstable-nested-components': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['src/redux/slices/*.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
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
          ['@thunks', './src/redux/thunks'],
          ['@selectors', './src/redux/selectors'],
          ['@middlewares', './src/redux/middlewares'],
          ['@slices', './src/redux/slices'],
        ],
        extensions: ['.ts', '.tsx', '.ios.ts', '.android.ts', '.json', '.js'],
      },
    },
    'import/ignore': ['react-native'],
  },
};
