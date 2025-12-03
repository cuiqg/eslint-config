import { interopDefault } from '../utils'

export async function imports() {
  const pluginImportLite = await interopDefault(import('eslint-plugin-import-lite'))

  return [
    {
      name: 'cuiqg/imports',
      plugins: {
        import: pluginImportLite,
      },
      rules: {
        'import/consistent-type-specifier-style': ['error', 'top-level'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/newline-after-import': ['error', { count: 1 }],
      }
    }
  ]
}
