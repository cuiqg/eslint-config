import { interopDefault } from '../utils'

export async function macros() {
  const [ configMacros ] = await Promise.all([
    interopDefault(import('@vue-macros/eslint-config'))
  ])

  return [
    {
      ...configMacros,
      name: 'cuiqg/macros'
    }
  ]
}
