import { interopDefault } from '../utils'

/**
 * Comments
 *
 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function comments() {
  const pluginComments = await interopDefault(
    import('eslint-plugin-eslint-comments')
  )

  return [
    {
      name: 'cuiqg/eslint-comments',
      plugins: {
        'eslint-comments': pluginComments
      },
      rules: {
        ...pluginComments.configs.recommended.rules
      }
    }
  ]
}
