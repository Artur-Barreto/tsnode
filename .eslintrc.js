module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier/@typescript-eslint',
    'standard'

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
