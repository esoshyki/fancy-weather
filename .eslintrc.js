module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
    browser: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    "camelcase": 0,
    "class-methods-use-this" : 0,
    "no-console": 0,
    "radix" : 0,
    "no-undef": 0,
    "no-unused-vars" : 0
  },
};
