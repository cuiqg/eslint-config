import { interopDefault } from '../utils'
import { GLOB_EXCLUDE } from '../globs'

export async function ignores() {
  const [pluginGitignore] = await Promise.all([
    interopDefault(import('eslint-config-flat-gitignore'))
  ])

  return [
    {
      ignores: [...GLOB_EXCLUDE],
      name: 'cuiqg/ignores'
    },
    {
      ...pluginGitignore({
        name: 'cuiqg/ignores/gitignore',
        strict: false
      })
    }
  ]
}
