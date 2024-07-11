import { interopDefault } from '../utils'

/**
 * Markdown
 * @see https://ota-meshi.github.io/eslint-plugin-regexp/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function regexp() {
  const pluginRegexp = await interopDefault(import('eslint-plugin-regexp'))

  return [
    {
      name: 'cuiqg/regexp',
      plugins: {
        regexp: pluginRegexp
      },
      rules: {
        ...(pluginRegexp.configs['flat/recommended'].rules)
      }
    }
  ]
}
