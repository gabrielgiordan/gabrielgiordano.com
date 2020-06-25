module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  plugins: ["prettier", "react"],
  globals: {
    __PATH_PREFIX__: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
