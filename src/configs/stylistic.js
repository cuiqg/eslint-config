import { interopDefault } from '../utils'

export const stylisticConfigDefaults = {
  experimental: false,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
}

export async function stylistic(options = {}) {

  const {
    commaDangle = 'never',
    experimental,
    indent,
    jsx,
    quotes,
    semi,
  } = {
    ...stylisticConfigDefaults,
    ...options
  }

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

  const config = pluginStylistic.configs.customize({
    commaDangle,
    experimental,
    indent,
    jsx,
    pluginName: '@stylistic',
    quotes,
    semi,
  })

  return [
    {
      name: 'cuiqg/stylistic',
      plugins: {
        '@stylistic': pluginStylistic
      },
      rules: {
        ...config.rules,
        '@stylistic/generator-star-spacing': ['error', { after: true, before: false }],
        '@stylistic/yield-star-spacing': ['error', { after: true, before: false }],
      }
    }
  ]
}
