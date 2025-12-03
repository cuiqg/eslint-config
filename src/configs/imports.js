import { interopDefault } from '../utils'

export async function imports() {
  const pluginImport = await interopDefault(import('eslint-plugin-import'))

  return [
    {
      ...pluginImport.flatConfigs.recommended,
      name: 'cuiqg/imports'
    }
  ]
}
