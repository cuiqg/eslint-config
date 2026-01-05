import globals from 'globals'
import { interopDefault } from '../utils'
import { GLOB_JS } from '../globs'

export async function javascript() {
  const files = [GLOB_JS]

  const [pluginJS] = await Promise.all([
    interopDefault(import('@eslint/js'))
  ])

  return [
    {
      name: 'cuiqg/javascript',
      files,
      plugins: {
        js: pluginJS
      },
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.es2026,
          ...globals.node
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 'latest',
          sourceType: 'module'
        },
        sourceType: 'module'
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      rules: {
        ...(pluginJS.configs.recommended.rules),
        'no-unused-vars': 'off'
      }
    }
  ]
}
