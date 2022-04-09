module.exports = {
  "root": true,
  "env": {
    es6: true,
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    "quotes": ["warn", "double"],
    "indent": ["warn", 2],
    "space-before-function-paren": ["warn", "never"],
    "no-unused-vars": ["warn", "all"],
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
    "sourceType": "module",
  },
};
