module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          ['parent', 'sibling', 'index'],
          'internal',
          'unknown',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@contexts/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@provider/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@dtos/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@flows/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@routes/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@theme/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@infrastructure/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@application/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
