import { interopDefault } from '../utils'

/**
 * UnoCSS
 *
 * @see https://unocss.dev/integrations/eslint
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const unocss = async () => {
  const pluginUnoCSS = await interopDefault(import('@unocss/eslint-plugin'))

  return [
    {
      ...(pluginUnoCSS.configs.flat),
      name: 'cuiqg/unocss',
    }
  ]
}
