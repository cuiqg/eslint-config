import { interopDefault } from '../utils'

export async function comments() {
  const pluginComments = await interopDefault(
    import('eslint-plugin-eslint-comments')
  )

  return [
    {
      name: 'cuiqg/eslint-comments/rules',
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        ...pluginComments.configs.recommended.rules,
      },
    },
  ]
}
