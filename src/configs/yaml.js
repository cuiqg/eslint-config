import { ensurePackages, interopDefault } from '../utils'
import { GLOB_YAML } from '../globs'

export async function yaml(options = {}) {
  const { files = [GLOB_YAML], overrides = {} } = options

  await ensurePackages(['eslint-plugin-yml', 'yaml-eslint-parser'])

  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser'))
  ])

  return [
    {
      name: 'cuiqg/yaml/setup',
      plugins: {
        yaml: pluginYaml
      }
    },
    {
      files,
      languageOptions: {
        parser: parserYaml
      },
      name: 'cuiqg/yaml/rules',
      rules: {
        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',
        'yaml/vue-custom-block/no-parsing-error': 'error',

        ...overrides
      }
    }
  ]
}
