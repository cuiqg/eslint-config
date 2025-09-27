import globals from 'globals'
import { interopDefault } from '../utils'
export async function javascript() {
  const [pluginJs] = await Promise.all([
    interopDefault(import('@eslint/js'))
  ])

  return [
    {
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
          ...globals.es2025,
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
      name: 'cuiqg/javascript',
      plugins: {
        js: pluginJs
      },
      rules: {
        ...pluginJs.configs.recommended.rules
      }
    }
  ]
}
