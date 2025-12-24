import { interopDefault } from '../utils'

export const stylisticConfigDefaults = {
  experimental: false,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
}

export async function stylistic() {

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  const config = pluginStylistic.configs.customize({

    ...stylisticConfigDefaults,
    ...{
      commaDangle: 'never'
    }
  })

  return [
    {
      name: 'cuiqg/stylistic',
      plugins: {
        '@stylistic': pluginStylistic
      },
      rules: {
        ...config.rules
      }
    }
  ]
}
