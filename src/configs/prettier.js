import { interopDefault } from '../utils'

/**
 * Prettier
 *
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @returns {import('eslint').Linter.FlatConfig[]}
 */

export const prettier = async () => {
  const [pluginJsonc, pluginPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('eslint-plugin-prettier'))
  ])

  return [
    {
      name: 'cuiqg/prettier',
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...pluginPrettier.configs.recommended.rules,
        ...pluginJsonc.configs.prettier.rules,
        'prettier/prettier': 'warn'
      }
    }
  ]
}
