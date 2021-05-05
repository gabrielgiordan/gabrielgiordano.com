module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier', 'react', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/strict',
  ],
  globals: {
    __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
