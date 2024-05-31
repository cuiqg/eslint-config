import { ensurePackages, interopDefault } from '../utils'

export async function unocss(options = {}) {
  const { attributify = true, strict = false } = options

  await ensurePackages(['@unocss/eslint-plugin'])

  const [pluginUnoCSS] = await Promise.all([
    interopDefault(import('@unocss/eslint-plugin')),
  ])

  return [
    {
      name: 'cuiqg/unocss',
      plugins: {
        unocss: pluginUnoCSS,
      },
      rules: {
        'unocss/order': 'warn',
        ...(attributify
          ? {
              'unocss/order-attributify': 'warn',
            }
          : {}),
        ...(strict
          ? {
              'unocss/blocklist': 'error',
            }
          : {}),
      },
    },
  ]
}
