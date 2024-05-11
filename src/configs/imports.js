import { GLOB_SRC_EXT } from '../globs'
import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function imports() {
  const pluginImport = await interopDefault(import('eslint-plugin-import-x'))

  return [
    {
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
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
