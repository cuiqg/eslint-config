import { interopDefault } from '../utils'

export async function unocss() {
  const [pluginUnoCSS] = await Promise.all([
    interopDefault(import('@unocss/eslint-plugin'))
  ])

  return [{
    ...(pluginUnoCSS.configs.flat),
    name: 'cuiqg/unocss'
  }]
}
