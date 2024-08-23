import globals from 'globals'
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { interopDefault } from '../utils'

/**
 * JavaScript
 *
 * @see https://npm.im/@eslint/js
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function javascript() {
  const pluginJS = await interopDefault(import('@eslint/js'))

  return [
    {
      name: 'cuiqg/javascript',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node
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
        'no-unused-vars': ['error', {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all'
        }]
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
