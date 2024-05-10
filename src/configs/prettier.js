import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function prettier() {
  const [pluginPrettier, configPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-config-prettier')),
  ])

  return [
    {
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
