import { interopDefault } from '../utils'

export async function compat() {
  const pluginCompat = await interopDefault(import('eslint-plugin-compat'))

  return [
    {
      name: 'cuiqg/compat',
      plugins: {
        compat: pluginCompat
      },
      rules: {
        ...pluginCompat.configs.recommended.rules
      }
    }
  ]
}
