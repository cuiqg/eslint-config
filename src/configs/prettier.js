import { configPrettier, pluginPrettier } from '../plugins'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const prettier = [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
]
