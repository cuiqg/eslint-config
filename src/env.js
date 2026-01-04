import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const isInGitHookOrLintStaged = () => {
  return !!(false
    || process.env.GIT_PARAMS
    || process.env.VSCODE_GIT_COMMAND
    || process.env.npm_lifecycle_script?.startsWith('lint-staged')
  )
}

export const isInEditor = () => {
  if (process.env.CI) return false
  if (isInGitHookOrLintStaged()) return false
  return !!(false
    || process.env.VSCODE_PID
    || process.env.VSCODE_CWD
    || process.env.JETBRAINS_IDE
    || process.env.VIM
    || process.env.NVIM
  )
}

export const hasVue = () => isPackageExists('vue')
export const hasUnocss = () => isPackageExists('unocss')
