import { interopDefault } from '../utils'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'

export async function jsonc(options = {}) {
  const {
    files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    overrides = {}
  } = options

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
        ...pluginJsonc.configs['recommended-with-json'].rules,

        ...overrides
      }
    }
  ]
}
