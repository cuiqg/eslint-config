import { interopDefault } from '../utils'
import { GLOB_JS } from '../globs'

/**
 * JsDoc
 * @see https://npm.im/eslint-plugin-jsdoc
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function jsdoc() {
  const pluginJsdoc = await interopDefault(import('eslint-plugin-jsdoc'))
  const files = [GLOB_JS]

  return [
    {
      files,
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
