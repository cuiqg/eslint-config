import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const isInGitHookOrLintStaged = (): boolean => {
  return !!(
    process.env.GIT_PARAMS ||
    process.env.VSCODE_GIT_COMMAND ||
    process.env.npm_lifecycle_script?.startsWith('lint-staged')
  )
}
export const isInEditor = (): boolean => {
  if (process.env.CI) return false
  if (isInGitHookOrLintStaged()) return false
  return !!(
    process.env.VSCODE_PID ||
    process.env.VSCODE_CWD ||
    process.env.JETBRAINS_IDE ||
    process.env.VIM ||
    process.env.NVIM
  )
}

export const hasVue = (): boolean =>
  ['vue', 'nuxt', 'vitepress', '@slidev/cli'].some(i => isPackageExists('vue'))
export const hasTypeScript = (): boolean => isPackageExists('typescript')
export const hasUnoCss = (): boolean => isPackageExists('unocss')
export const hasNextjs = (): boolean => isPackageExists('next')
