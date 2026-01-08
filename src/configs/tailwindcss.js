import { interopDefault } from '../utils'
import { GLOB_VUE, GLOB_CSS } from '../globs'

export async function tailwindcss() {
  const [pluginTailwindcss] = await Promise.all([
    interopDefault(import('@poupe/eslint-plugin-tailwindcss'))
  ])

  const files = [GLOB_CSS, GLOB_VUE]

  return [
    {
      name: 'cuiqg/tailwindcss',
      files,
      plugins: {
        tailwindcss: pluginTailwindcss
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      rules: {
        ...pluginTailwindcss.configs.recommended.rules
      },
      settings: {
      }
    }
  ]
}
