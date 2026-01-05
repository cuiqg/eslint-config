import { interopDefault } from '../utils'

export async function nextjs() {
  const [pluginNextjs] = await Promise.all([
    interopDefault(import('@next/eslint-plugin-next'))
  ])

  return [
    {
      name: 'cuiqg/nextjs',
      plugins: {
        '@next/next': pluginNextjs
      },
      rules: {
        ...pluginNextjs.configs.recommended.rules
      }
    }
  ]
}
