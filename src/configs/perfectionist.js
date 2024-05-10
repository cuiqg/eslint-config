import { pluginPerfectionist } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function perfectionist() {
  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
  ]
}
