import { pluginUnocss } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem} */
export function unocss(options = {}) {
  const {
    overrides = {},
  } = options

  return [
    {
      name: 'tsuiqg:unocss',
      plugins: {
        '@unocss': pluginUnocss,
      },
      rules: {
        ...pluginUnocss.configs.recommended.rules,

        ...overrides,
      },
    },
  ]
}
