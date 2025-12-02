import { interopDefault } from '../utils'

export async function unicorn() {
  const pluginUnicorn = await interopDefault(import('eslint-plugin-unicorn'))

  return [
    {
      name: 'cuiqg/unicorn',
      plugins: {
        unicorn: pluginUnicorn
      },
      rules: {
        ...pluginUnicorn.configs?.recommended?.rules
      }
    }
  ]
}
