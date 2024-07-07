import globals from 'globals'
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { interopDefault } from '../utils'

export async function javascript(options = {}) {
  const { overrides = {} } = options

  const pluginJS = await interopDefault(import('@eslint/js'))
  return [
    {
      name: 'cuiqg/javascript',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: 'module'
        },
        sourceType: 'module'
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      rules: {
        ...pluginJS.configs.recommended.rules,
        ...overrides
      }
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      name: 'cuiqg/javascript/disables',
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
