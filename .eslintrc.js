module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-use-before-define": "off",
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "no-useless-constructor": 0,
    "camelcase": 0
  }
}
