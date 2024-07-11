import { interopDefault } from '../utils'

/**
 * Perfectionist
 * @see https://eslint-plugin-perfectionist.azat.io/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function perfectionist() {
  const pluginPerfectionist = await interopDefault(import('eslint-plugin-perfectionist'))

  return [
    {
      name: 'cuiqg/perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist
      },
      rules: {
      }
    }
  ]
}
