/*eslint-env node*/

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true
  },
  globals: {
    window: true,
    document: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    beforeEach: true,
    fetch: true,
    alert: true
  },
  rules: {
    quotes: 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 0,
    semi: [1, "always"],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": 1,
    "react/display-name": [
      1,
      {
        ignoreTranspilerName: false
      }
    ],
    "react/forbid-prop-types": [
      1,
      {
        forbid: ["any"]
      }
    ],
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "import/extensions": 0,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "prettier/prettier": "error"
  }
};
