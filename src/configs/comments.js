import { pluginComments } from '../plugins'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const comments = [
  {
    plugins: {
      'eslint-comments': pluginComments,
    },
    rules: {
      ...pluginComments.configs.recommended.rules,
      'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    },
  },
]
