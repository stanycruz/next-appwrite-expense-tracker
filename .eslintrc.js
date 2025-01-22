module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['warn'],
    'no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'warn',
    'no-undef': 'warn',
  },
};
