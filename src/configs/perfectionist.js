import { interopDefault } from '../utils'

/**
 * Perfectionist
 * @see https://perfectionist.dev/
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
        ...pluginPerfectionist.configs['recommended-alphabetical'].rules
      }
    }
  ]
}
