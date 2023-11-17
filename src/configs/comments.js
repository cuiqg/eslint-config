import { pluginComments } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem} */
export function comments() {
  return [
    {
      name: 'tsuiqg:eslint-comments',
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        ...pluginComments.configs.recommended.rules,
      },
    },
  ]
}
