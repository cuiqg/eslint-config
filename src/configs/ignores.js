import { GLOB_EXCLUDE } from '../globs'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export async function ignores() {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
