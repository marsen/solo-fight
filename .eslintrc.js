module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      { "selector": "variable", "format": ["camelCase"] },
      { "selector": "function", "format": ["camelCase"] },
      { "selector": "typeLike", "format": ["PascalCase"] },
      { "selector": "memberLike", "format": ["camelCase"] },
      { "selector": "enumMember", "format": ["PascalCase"] }
    ]
  },
  overrides: [
    {
      files: [ '*.ts'],
      parserOptions: {
        project: './tsconfig.json'
      },
      extends: ['standard-with-typescript'],
      rules: {
        // Other rules
      }
    }
  ],
};