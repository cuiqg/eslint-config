import { interopDefault } from '../utils'

export async function comments() {
  const [pluginComments] = await Promise.all([
    interopDefault(import('@eslint-community/eslint-plugin-eslint-comments'))
  ])

  return [
    {
      name: 'cuiqg/eslint-comments',
      plugins: {
        '@eslint-community/eslint-comments': pluginComments
      },
      rules: {
        '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
        '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
        '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
        '@eslint-community/eslint-comments/no-unused-enable': 'error'
      }
    }
  ]
}
