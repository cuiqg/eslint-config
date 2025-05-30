import { interopDefault } from '../utils'

/**
 * Gitignore
 *
 * @see https://github.com/antfu/eslint-config-flat-gitignore
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const gitignore = async () => {
  const pluginGitignore = await interopDefault(import('eslint-config-flat-gitignore'))

  return [
    pluginGitignore({
      name: 'cuiqg/gitignore',
      strict: false
    })
  ]
}
