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
        ...(pluginImportX.configs['flat/recommended'].rules),
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
