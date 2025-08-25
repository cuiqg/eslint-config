import type { FlatConfigItem } from '../types'
import { interopDefault } from '../utils'
import { GLOB_EXCLUDE } from '../globs'
export async function ignores(): Promise<FlatConfigItem[]> {
  const configGitignore = await interopDefault(import('eslint-config-flat-gitignore'))

  return [
    {
      ignores: [...GLOB_EXCLUDE],
      name: 'cuiqg/ignores',
    },
    configGitignore({
      name: 'cuiqg/ignores/gitignore',
      strict: false,
    }),
  ]
}
