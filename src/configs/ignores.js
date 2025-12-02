import { GLOB_EXCLUDE } from '../globs'
import { interopDefault } from '../utils'

export async function ignores() {
  const configGitignore = await interopDefault(import('eslint-config-flat-gitignore'))

  return [
    {
      ignores: [...GLOB_EXCLUDE],
      name: 'cuiqg/ignores'
    },
    configGitignore({
      name: 'cuiqg/gitignore',
      strict: false
    })
  ]
}
