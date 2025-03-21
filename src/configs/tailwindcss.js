import { interopDefault } from '../utils'

/**
 * Unicorn
 *
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function tailwindcss() {
  const pluginTailwindcss = await interopDefault(import('eslint-plugin-tailwindcss'))

  return [
    {
      name: 'cuiqg/tailwindcss',
      plugins: {
        tailwindcss: pluginTailwindcss
      },
      rules: {
        ...(pluginTailwindcss.configs.recommended.rules)
      }
    }
  ]
}
