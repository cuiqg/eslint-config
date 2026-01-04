import { interopDefault } from '../utils'

export async function unocss() {
  const [pluginUnoCSS] = await Promise.all([
    interopDefault(import('@unocss/eslint-plugin'))
  ])

  return [{
    name: 'cuiqg/unocss',
    plugins: {
      '@unocss': pluginUnoCSS
    },
    rules: {
      '@unocss/order': 'warn',
      '@unocss/order-attributify': 'warn'
    }
  }]
}
