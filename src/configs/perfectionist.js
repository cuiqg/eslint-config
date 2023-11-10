import { pluginPerfectionist } from '../plugins'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const perfectionist = [
  {
    plugins: {
      perfectionist: pluginPerfectionist
    }
  }
]
