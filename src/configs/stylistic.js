import { ensurePackages, interopDefault } from '../utils'

export async function stylistic(options = {}) {
  const {
    indent = 2,
    jsx = true,
    quotes = 'single',
    semi = false,
    commaDangle = 'never',
    overrides = {}
  } = options

  await ensurePackages(['@stylistic/eslint-plugin'])

  const pluginStylistic = await interopDefault(
    import('@stylistic/eslint-plugin')
  )

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
    commaDangle
  })

  return [
    {
      name: 'cuiqg/stylistic',
      plugins: {
        style: pluginStylistic
      },
      rules: {
        ...config.rules,

        ...overrides
      }
    }
  ]
}
