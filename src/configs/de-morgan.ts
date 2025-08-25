import type { FlatConfigItem } from '../types'
import { interopDefault } from '../utils'

export async function deMorgan(): Promise<FlatConfigItem[]> {
  const pluginDeMorgan = await interopDefault(import('eslint-plugin-de-morgan'))
  return [
    {
      ...pluginDeMorgan.configs.recommended,
      name: 'cuiqg/de-morgan',
    },
  ]
}
