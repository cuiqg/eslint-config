import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'

/**
 * Disables
 *
 * @see https://npm.im/@eslint/js
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function disables() {
  return [
    {
      files: [`**/scripts/${GLOB_SRC}`, `**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
      name: 'cuiqg/disables',
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
