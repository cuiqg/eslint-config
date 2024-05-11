import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function unicorn() {
  const pluginUnicorn = await interopDefault(import('eslint-plugin-unicorn'))

  return [
    pluginUnicorn.configs['flat/recommended'],
    {
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ]
}
