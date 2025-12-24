import { interopDefault } from '../utils'

export async function tailwindcss() {
  const pluginTailwindcss = await interopDefault(import('eslint-plugin-tailwindcss'))

  return [
    {
      name: 'cuiqg/tailwindcss',
      plugins: {
        tailwindcss: pluginTailwindcss
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...pluginTailwindcss.configs.recommended.rules
      },
      settings: {
      }
    }
  ]
}
