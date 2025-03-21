import { GLOB_YAML } from '../globs'
import { interopDefault } from '../utils'

/**
 * Yaml
 *
 * @see https://ota-meshi.github.io/eslint-plugin-yml/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */

export async function yaml() {
  const files = [GLOB_YAML]

  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser'))
  ])

  return [
    {
      name: 'cuiqg/yaml',
      files,
      plugins: {
        yaml: pluginYaml
      },
      languageOptions: {
        parser: parserYaml
      },
      rules: {
        ...(pluginYaml.configs.recommended.rules),
        ...(pluginYaml.configs.prettier.rules)
      }
    }
  ]
}
