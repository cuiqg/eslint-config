import { GLOB_YAML } from '../globs'
import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function yaml() {
  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser')),
  ])

  return [
    {
      plugins: {
        yaml: pluginYaml,
      },
    },
    {
      files: [GLOB_YAML],
      languageOptions: {
        parser: parserYaml,
      },
      rules: {
        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',
        'yaml/vue-custom-block/no-parsing-error': 'error',
        'yaml/block-mapping-question-indicator-newline': 'error',
        'yaml/block-sequence-hyphen-indicator-newline': 'error',
        'yaml/flow-mapping-curly-newline': 'error',
        'yaml/flow-mapping-curly-spacing': 'error',
        'yaml/flow-sequence-bracket-newline': 'error',
        'yaml/flow-sequence-bracket-spacing': 'error',
        'yaml/indent': ['error', 2],
        'yaml/key-spacing': 'error',
        'yaml/no-tab-indent': 'error',
        'yaml/quotes': ['error', { avoidEscape: false, prefer: 'single' }],
        'yaml/spaced-comment': 'error',
      },
    },
  ]
}
