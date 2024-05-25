const { resolve } = require('node:path');
const globals = require('globals');
const pluginNext = require('@next/eslint-plugin-next');
const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const parserTypeScript = require('@typescript-eslint/parser');
const pluginImport = require('eslint-plugin-import');
const pluginPrettier = require('eslint-plugin-prettier/recommended');
const pluginTypeScript = require('@typescript-eslint/eslint-plugin');

const tsconfigPath = resolve(process.cwd(), 'tsconfig.json');

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = [
  {
    ignores: ['**/out/', '**/*.{js,json,md,mjs,scss}'],
  },

  {
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      'import': pluginImport,
    },
  },

  {
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: tsconfigPath,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: tsconfigPath,
        },
      },
    },
  },

  {
    files: ['./src/**/*.{ts,tsx}'],
    rules: {
      // Enforce consistent usage of type imports
      '@typescript-eslint/consistent-type-imports': 'error',

      // Enforce consistent import order
      'import/order': [
        'error',
        {
          'alphabetize': {
            caseInsensitive: true,
            order: 'asc',
          },
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          'pathGroups': [
            {
              pattern: '{.,..}/types',
              group: 'object',
              position: 'after',
            },
            {
              pattern: '*.{jpg,jpeg,gif,png,svg}',
              group: 'object',
              patternOptions: {
                matchBase: true,
              },
              position: 'after',
            },
            {
              pattern: '*.{css,scss}',
              group: 'object',
              patternOptions: {
                matchBase: true,
              },
              position: 'after',
            },
          ],
          'newlines-between': 'never',
        },
      ],
    },
  },

  {
    plugins: {
      react: pluginReact,
    },
    rules: pluginReact.configs['jsx-runtime'].rules,
  },

  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
      },
    },
  },

  // Include Prettier validation in the linting pipeline
  pluginPrettier,
];
