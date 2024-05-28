import { pluginComments } from '../plugins'

/** @type {import('eslint').Linter.FlatConfig[]} */
export const comments = [
    {
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        ...pluginComments.configs.recommended.rules,
      },
    },
]
