import { GLOB_EXCLUDE } from '../globs'

export async function ignores() {
  return [
    {
      name: 'cuiqg/ignores',
      ignores: GLOB_EXCLUDE,
    },
  ]
}
