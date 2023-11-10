module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // 在此添加自定義規則
  },
  overrides: [
    {
      files: [ '*.ts'],
      parserOptions: {
        project: './tsconfig.json'
      },
      extends: 'standard-with-typescript'
    }
  ],
};