import { interopDefault } from '../utils'
import { GLOB_CSS } from '../globs'

export async function css() {
  const [pluginCSS] = await Promise.all([
    interopDefault(import('@eslint/css'))
  ])

  const files = [GLOB_CSS]

  return [
    {
      name: 'cuiqg/css',
      files,
      language: 'css/css',
      plugins: {
        css: pluginCSS
      },
      rules: {
        ...(pluginCSS.configs.recommended.rules)
      }
    }
  ]
}
