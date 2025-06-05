import {GLOB_TS, GLOB_TSX} from '../globs'
import {interopDefault, renameRules} from '../utils'
/**
 * TypeScript
 *
 * @see https://typescript-eslint.io/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const typescript = async () => {
  const files = [GLOB_TS, GLOB_TSX]

  const [pluginTs, parserTs] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser'))
  ])

  return [{
    files,
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: 'module'
      }
    },
    name: 'cuiqg/typescript',
    plugins: {
      'ts': pluginTs
    },
    rules: {
      ...renameRules(pluginTs.configs['flat/recommended'].rules, {
      '@typescript-eslint': 'ts'
    })
    }
  }]
}
