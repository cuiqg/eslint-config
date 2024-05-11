import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function comments() {
  const pluginComments = await interopDefault(
    import('eslint-plugin-eslint-comments')
  )

  return [
    {
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        ...pluginComments.configs.recommended.rules,
      },
    },
  ]
}
