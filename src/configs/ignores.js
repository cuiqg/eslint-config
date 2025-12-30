import { GLOB_EXCLUDE } from '../globs'

export async function ignores() {
  return [
    {
      ignores: [...GLOB_EXCLUDE],
      name: 'cuiqg/ignores'
    }
  ]
}
