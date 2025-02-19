import { interopDefault } from '../utils'

/**
 * Unicorn
 *
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function unicorn() {
  const pluginUnicorn = await interopDefault(import('eslint-plugin-unicorn'))

  return [
    {
      name: 'cuiqg/unicorn',
      plugins: {
        unicorn: pluginUnicorn
      },
      rules: {
        ...pluginUnicorn.configs['recommended'].rules
      }
    }
  ]
}
