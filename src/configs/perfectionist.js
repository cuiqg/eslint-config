import { pluginPerfectionist } from '../plugins'

/** @type {import('eslint').Linter.FlatConfig[]} */
export const perfectionist = [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
]
