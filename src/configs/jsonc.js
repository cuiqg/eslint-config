import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'
import { interopDefault } from '../utils'

/**
 * JSONC
 *
 * @link https://ota-meshi.github.io/eslint-plugin-jsonc/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function jsonc() {
  const files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC]

  const [pluginJsonc, parserJsonc] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser'))
  ])

  return [
    {
      name: 'cuiqg/jsonc',
      files,
      plugins: {
        jsonc: pluginJsonc
      },
      languageOptions: {
        parser: parserJsonc
      },
      rules: {
        ...(pluginJsonc.configs['recommended-with-jsonc'].rules),
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'jsonc/quote-props': 'error',
        'jsonc/quotes': 'error'
      }
    }
  ]
}
