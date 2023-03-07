module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mdx/recommended',
    'prettier'
  ],
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {}
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    /* Enable Rules*/
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    /* Disable Rules */
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-duplicate-imports': 'off'
  }
}
