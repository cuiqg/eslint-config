import { GLOB_SRC_EXT } from '../globs'
import { pluginImport } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function imports() {
  return [
    {
      plugins: {
        import: pluginImport,
      },
      settings: {
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
      },
      rules: {
        ...pluginImport.configs.recommended.rules,

        'import/first': 'error',
        'import/newline-after-import': [
          'error',
          { considerComments: true, count: 1 },
        ],
        'import/no-duplicates': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-unresolved': 'off',
        'import/no-unused-modules': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': 'error',
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      rules: {},
    },
  ]
}
