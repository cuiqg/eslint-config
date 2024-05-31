import { interopDefault } from '../utils'
import { GLOB_PRETTIER } from '../globs'

export async function prettier() {
  const [pluginPrettier, configPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-config-prettier')),
  ])

  return [
    {
      name: 'cuiqg/prettier/setup',
      files: GLOB_PRETTIER,
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...configPrettier.rules,
        ...pluginPrettier.configs.recommended.rules,
        'prettier/prettier': 'warn',
      },
    },
  ]
}
