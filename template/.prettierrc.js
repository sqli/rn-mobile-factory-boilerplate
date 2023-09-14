module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 100,
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json', tabWidth: 2, singleQuote: false },
    },
  ],
};
