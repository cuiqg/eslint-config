import { GLOB_ALL_SRC } from '../globs'
import { pluginPrettier, configPrettier } from '../plugins'

/** @type {import('eslint').Linter.FlatConfig[]} */
export const prettier = [
    {
      files: GLOB_ALL_SRC,
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
    configPrettier,
]
