import { ensurePackages, interopDefault } from '../utils'
import { GLOB_YAML } from '../globs'

/**
 * Yaml
 *
 * @see https://ota-meshi.github.io/eslint-plugin-yml/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */

export async function yaml() {
  const files = [GLOB_YAML]

  await ensurePackages(['eslint-plugin-yml', 'yaml-eslint-parser'])

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
        ...(pluginYaml.configs.standard.rules),
        ...(pluginYaml.configs.prettier.rules),
        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',
        'yaml/vue-custom-block/no-parsing-error': 'error'
      }
    }
  ]
}
