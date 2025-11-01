import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import security from 'eslint-plugin-security';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginTailwind from 'eslint-plugin-tailwindcss';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import prettierConfig from './prettier.config.js';

export default tseslint.config(
  { ignores: ['.next', 'dist', 'node_modules'] },

  {
    settings: {
      'import/resolver': {
        typescript: {},
        node: {},
      },
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl'],
        config: 'tailwind.config.js',
      },
    },

    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      'simple-import-sort': eslintPluginSimpleImportSort,
      'unused-imports': eslintPluginUnusedImports,
      tailwindcss: eslintPluginTailwind,
      react,
      security,
      'jsx-a11y': jsxA11y,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      next.configs['core-web-vitals'],
    ],

    rules: {
      ...reactHooks.configs.recommended.rules,

      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'off',

      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',

      'prettier/prettier': ['error', prettierConfig],

      'import/order': [
        'error',
        { groups: [['builtin', 'external', 'internal']] },
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'off',

      'security/detect-object-injection': 'off',

      'jsx-a11y/anchor-is-valid': [
        'error',
        { aspects: ['invalidHref', 'preferButton'] },
      ],
      'jsx-a11y/no-static-element-interactions': 'warn',

      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-shorthand': 'off',
    },
  },
  {
    plugins: {
      tailwindcss: eslintPluginTailwind,
    },
    rules: eslintPluginTailwind.configs.recommended.rules,
  },
);
