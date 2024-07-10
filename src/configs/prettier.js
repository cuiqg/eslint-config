import { interopDefault } from '../utils'

/**
 * Prettier
 *
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @returns {import('eslint').Linter.FlatConfig[]}
 */

export async function prettier() {
  const [pluginJsonc, pluginPrettier, configPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-config-prettier'))
  ])

  return [
    {
      name: 'cuiqg/prettier',
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...configPrettier.rules,
        ...pluginPrettier.configs.recommended.rules,
        ...pluginJsonc.configs.prettier.rules,
        'prettier/prettier': 'warn'
      }
    }
  ]
}
