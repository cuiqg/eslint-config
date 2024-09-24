import { interopDefault } from '../utils'

/**
 * Stylistic
 *
 * @see https://eslint.style/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function stylistic() {
  const pluginStylistic = await interopDefault(
    import('@stylistic/eslint-plugin')
  )

  const config = pluginStylistic.configs.customize({
    flat: true,
    pluginName: 'style',
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
    commaDangle: 'never'
  })

  return [
    {
      name: 'cuiqg/stylistic',
      plugins: {
        style: pluginStylistic
      },
      rules: {
        ...config.rules
      }
    }
  ]
}
