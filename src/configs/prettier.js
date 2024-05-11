import { GLOB_ALL_SRC } from '../globs'
import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function prettier() {
  const [pluginPrettier, configPrittier] = await Promise.all([
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-config-prettier')),
  ])

  return [
    configPrittier,
    {
      files: GLOB_ALL_SRC,
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ]
}
