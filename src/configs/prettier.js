import { GLOB_ALL_SRC } from '../globs'
import { pluginPrettier, configPrettier } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function prettier() {
  return [
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
}
