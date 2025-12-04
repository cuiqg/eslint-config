import { interopDefault } from '../utils'

export const stylisticConfigDefaults = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
  commaDangle: 'never'
}

export async function stylistic() {
  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  const config = pluginStylistic.configs.customize({
    ...{
    commaDangle: 'never',
    indent: 2,
    pluginName: 'style',
    quotes: 'single',
    semi: false
  },
  ...stylisticConfigDefaults
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
