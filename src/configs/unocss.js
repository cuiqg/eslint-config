import { interopDefault } from '../utils'

/**
 * UnoCSS
 *
 * @see https://unocss.dev/integrations/eslint
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function unocss() {
  const pluginUnoCSS = await interopDefault(import('@unocss/eslint-plugin'))

  return [
    {
      name: 'cuiqg/unocss',
      plugins: {
        unocss: pluginUnoCSS
      },
      rules: {
        'unocss/order': 'error',
        'unocss/order-attributify': 'warn'
      }
    }
  ]
}
