import globals from 'globals'
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { interopDefault } from '../utils'
import { isInEditor } from '../env'

/**
 * JavaScript
 *
 * @see https://npm.im/@eslint/js
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function javascript() {
  const [pluginJS, pluginUnusedImports] = await Promise.all([interopDefault(import('@eslint/js')), interopDefault(import('eslint-plugin-unused-imports'))])

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
      plugins: {
        'unused-imports': pluginUnusedImports
      },
      rules: {
        ...pluginJS.configs.recommended.rules,
        'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_'
          }
        ]
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
