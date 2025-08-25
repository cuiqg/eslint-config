import type { FlatConfigItem } from '../types'
import { interopDefault } from '../utils'
export async function node(): Promise<FlatConfigItem[]> {
  const pluginNode = await interopDefault(import('eslint-plugin-n'))

  return [
    {
      name: 'cuiqg/node/rules',
      plugins: {
        node: pluginNode,
      },
      rules: {
        ...pluginNode.configs.recommended.rules,
      },
    },
  ]
}
