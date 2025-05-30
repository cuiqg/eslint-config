import { interopDefault } from '../utils'

/**
 * Node
 *
 * @see https://github.com/eslint-community/eslint-plugin-n
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const node = async () => {
  const pluginNode = await interopDefault(import('eslint-plugin-n'))

  return [
    {
      name: 'cuiqg/node',
      plugins: {
        node: pluginNode
      },
      rules: {
        'node/handle-callback-err': ['error', '^(err|error)$'],
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/process': ['error', 'never'],
        'node/process-exit-as-throw': 'error'
      }
    }
  ]
}
