import { GLOB_EXCLUDE } from '../globs'

/** @type {import('eslint').Linter.FlatConfig[]} */
export const ignores =  [
    {
      ignores: GLOB_EXCLUDE,
    },
]
