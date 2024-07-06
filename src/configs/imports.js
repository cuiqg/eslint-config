import { interopDefault } from '../utils'

export async function imports(options = {}) {
  const { overrides = {} } = options

  const pluginImport = await interopDefault(import('eslint-plugin-import-x'))

  return [
    {
      name: 'cuiqg/imports/rules',
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
        'import/order': 'error',

        ...overrides
      }
    }
  ]
}
