import { GLOB_EXCLUDE } from '../globs'

/** @returns {import('eslint-define-config').FlatESLintConfigItem} */
export function ignores() {
  return [
    {
      name: 'tsuiqg:ignores',
      ignores: GLOB_EXCLUDE,
    },
  ]
}
