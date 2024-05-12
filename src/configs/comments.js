import { pluginComments } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function comments() {
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
