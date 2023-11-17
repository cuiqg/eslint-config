import { pluginPerfectionist } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem} */
export function perfectionist() {
  return [
    {
      name: 'tsuiqg:perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
  ]
}
