import { interopDefault } from '../utils'

export async function stylistic() {
  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  const config = pluginStylistic.configs.customize({
    pluginName: 'style',
    indent: 2,
    quotes: 'single',
    semi: false
  })
  return [
    {
      name: 'cuiqg/stylistic',
      plugins: {
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,
        'style/generator-star-spacing': ['error', { after: true, before: false }],
        'style/yield-star-spacing': ['error', { after: true, before: false }],
      }
    },
  ]
}
