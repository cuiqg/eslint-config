import { GLOB_IGNORE } from '../globs'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function ignores() {
  return [
    {
      ignores: GLOB_IGNORE,
    },
  ]
}
