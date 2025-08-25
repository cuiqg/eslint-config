import type { FlatConfigItem } from '../types'
import { interopDefault } from '../utils'

export async function prettier(): Promise<FlatConfigItem[]> {
  const [pluginPrettier, recommendedPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-plugin-prettier/recommended')),
  ])

  return [
    {
      plugins: {
        prettier: pluginPrettier,
      },
      name: 'cuiqg/prettier',
      rules: {
        ...recommendedPrettier.rules,
        'prettier/prettier': 'warn',
      },
    },
  ]
}
