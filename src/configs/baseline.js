import { interopDefault } from '../utils'

export async function baseline() {
  const [pluginBaseline] = await Promise.all([
    interopDefault(import('eslint-plugin-baseline-js'))
  ])

  return [
    {
      name: 'cuiqg/baseline',
      plugins: {
        'baseline-js': pluginBaseline
      },
      rules: {

        ...pluginBaseline.configs.recommended({ available: 'widely', level: 'warn' }).rules
      }
    }
  ]
}
