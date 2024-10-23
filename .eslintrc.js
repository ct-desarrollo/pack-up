module.exports = {
  root: true,
  extends: ['@ctdesarrollo/eslint-config/back/typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-rxjs'],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  overrides: [
    {
      files: ['./scripts/**/*', './src/cli/errors.ts', './src/cli/index.ts'],
      rules: {
        'no-console': ['error', { allow: ['error'] }],
      },
    },
    {
      files: ['./src/node/core/logger.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    'rxjs/finnish': 'error',
    'node/no-unsupported-features/es-syntax': 'off',
    'import/prefer-default-export': 'off',
    'import/namespace': 'off',
    'node/no-missing-import': 'off',
    'no-process-exit': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * Force us to use the Logger instance.
     */
    'no-console': 'error',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'internal', 'builtin'],
          'parent',
          ['sibling', 'index'],
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'nonblock-statement-body-position': ['error', 'below'],
  },
};
