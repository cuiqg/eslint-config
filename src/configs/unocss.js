import { pluginUnocss } from '../plugins'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const unocss = [
  {
    plugins: {
      '@unocss': pluginUnocss,
    },
    rules: {
      ...pluginUnocss.configs.recommended.rules,
    },
  },
]
