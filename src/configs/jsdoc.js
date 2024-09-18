import { interopDefault } from '../utils'

/**
 * JsDoc
 * @see https://npm.im/eslint-plugin-jsdoc
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function jsdoc() {
  const pluginJsdoc = await interopDefault(import('eslint-plugin-jsdoc'))

  return [
    {
      name: 'cuiqg/jsdoc',
      plugins: {
        jsdoc: pluginJsdoc
      },
      rules: {
        ...(pluginJsdoc.configs['flat/recommended'].rules)
      }
    }
  ]
}
