import { interopDefault } from '../utils'

export async function prettier() {
  const [pluginPrettier, recommendedPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-plugin-prettier/recommended'))
  ])

  return [
    {
      name: 'cuiqg/prettier',
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...recommendedPrettier.rules,
        'prettier/prettier': 'warn'
      }
    }
  ]
}
