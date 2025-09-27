import { interopDefault, renameRules } from '../utils'

export async function unocss() {
  const pluginUnoCSS = await interopDefault(import('@unocss/eslint-plugin'))

  return [
    {
      name: 'cuiqg/unocss',
      plugins: {
        unocss: pluginUnoCSS
      },
      rules: {
        ...renameRules(pluginUnoCSS.configs.recommended.rules, {
          '@unocss': 'unocss'
        })
      }
    }
  ]
}
