import { GLOB_EXCLUDE } from '../globs'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function ignores() {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
