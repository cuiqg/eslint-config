import { GLOB_TOML } from '../globs'
import { interopDefault } from '../utils'

/**
 * TOML
 *
 * @see https://ota-meshi.github.io/eslint-plugin-yml/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */

export async function toml() {
  const files = [GLOB_TOML]

  const [pluginToml, parserToml] = await Promise.all([
    interopDefault(import('eslint-plugin-toml')),
    interopDefault(import('toml-eslint-parser'))
  ])

  return [
    {
      name: 'cuiqg/toml',
      files,
      plugins: {
        toml: pluginToml
      },
      languageOptions: {
        parser: parserToml
      },
      rules: {
        ...(pluginToml.configs.recommended.rules)
      }
    }
  ]
}
