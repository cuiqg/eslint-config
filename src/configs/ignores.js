import { GLOB_EXCLUDE } from '../globs'

/**
 * Ignores
 *
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const ignores = () => {
  return [
    {
      name: 'cuiqg/ignores',
      ignores: GLOB_EXCLUDE
    }
  ]
}
