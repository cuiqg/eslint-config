import { interopDefault } from '../utils'

export async function imports() {

  const pluginImportX = await interopDefault(import('eslint-plugin-import-x'))

  return [
    {
      name: 'cuiqg/imports',
      plugins: {
        'import-x': pluginImportX
      },
      rules: {
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import-x/first': 'error',
        'import-x/no-duplicates': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-named-default': 'error',
        "import-x/newline-after-import": ["error", { "count": 1 }]
      },
      settings: {
        'import-x/core-modules': [
          'electron',
          'vue-router/auto-routes'
        ],
      }
    }
  ]
}
