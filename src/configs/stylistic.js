import { pluginStylistic } from '../plugins'

/**
 *
 */
export function stylistic(options = {}) {
  const {
    indent = 2,
    jsx = true,
    quotes = 'single',
    semi = false,
  } = options

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  })

  return [
    {
      name: 'tsuiqg:stylistic',
      plugins: {
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,
        curly: ['error', 'multi-or-nest', 'consistent'],
      },
    },
  ]
}
