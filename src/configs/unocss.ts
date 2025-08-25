import type { FlatConfigItem } from '../types'

import { interopDefault, renameRules } from '../utils'

export async function unocss(): Promise<FlatConfigItem[]> {
  const [pluginUnoCSS] = await Promise.all([
    interopDefault(import('@unocss/eslint-plugin')),
  ] as const)

  return [
    {
      name: 'cuiqg/unocss',
      plugins: {
        unocss: pluginUnoCSS,
      },
      rules: {
        ...renameRules(pluginUnoCSS.configs.recommended.rules, {
          '@unocss': 'unocss',
        }),
      },
    },
  ]
}
