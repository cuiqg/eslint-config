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
        'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-imports': ['error', {
          groups: [
            'type',
            ['parent-type', 'sibling-type', 'index-type', 'internal-type'],

            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'object',
            'unknown'
          ],
          newlinesBetween: 'ignore',
          order: 'asc',
          type: 'natural'
        }],
        'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }]
      }
    }
  ]
}
