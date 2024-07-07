import { interopDefault } from '../utils'
import { GLOB_SRC, GLOB_VUE } from '../globs'

export async function prettier(options = {}) {
  const { files = [GLOB_SRC, GLOB_VUE], overrides = {} } = options

  const [pluginJsonc, pluginPrettier, configPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-config-prettier'))
  ])

  return [
    {
      name: 'cuiqg/prettier',
      files,
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...configPrettier.rules,
        ...pluginPrettier.configs.recommended.rules,
        ...pluginJsonc.configs.prettier.rules,
        'prettier/prettier': 'warn',

        ...overrides
      }
    }
  ]
}
