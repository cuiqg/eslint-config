import { interopDefault } from '../utils'

export async function comments(options = {}) {
  const { overrides = {} } = options

  const pluginComments = await interopDefault(
    import('eslint-plugin-eslint-comments')
  )

  return [
    {
      name: 'cuiqg/eslint-comments/rules',
      plugins: {
        'eslint-comments': pluginComments
      },
      rules: {
        ...pluginComments.configs.recommended.rules,

        ...overrides
      }
    }
  ]
}
