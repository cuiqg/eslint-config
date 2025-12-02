import { interopDefault } from '../utils'

export async function promise() {
  const pluginPromise = await interopDefault(import('eslint-plugin-promise'))

  return [
    {
      ...pluginPromise.configs['flat/recommended'],
      name: 'cuiqg/promise'
    }
  ]
}
