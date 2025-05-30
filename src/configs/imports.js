import { interopDefault } from '../utils'

/**
 * Imports
 *
 * @see https://npm.im/eslint-plugin-import-x
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const imports = async () => {
  const pluginImport = await interopDefault(import('eslint-plugin-import-x'))

  return [
    {
      name: 'cuiqg/imports',
      plugins: {
        import: pluginImport
      },
      rules: {
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/newline-after-import': 'error',
        'import/order': 'error'
      }
    }
  ]
}
