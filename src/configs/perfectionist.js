import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function perfectionist() {
  const pluginPerfectionist = await interopDefault(
    import('eslint-plugin-perfectionist')
  )

  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
  ]
}
