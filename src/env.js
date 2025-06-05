import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const hasTypescript = () => isPackageExists('typescript')

export const hasVue
  = () => isPackageExists('vue')
    || isPackageExists('nuxt')
    || isPackageExists('vitepress')
    || isPackageExists('@slidev/cli')

export const hasUnocss
  = () => isPackageExists('unocss')
    || isPackageExists('@unocss/webpack')
    || isPackageExists('@unocss/nuxt')

export function isInEditor() {
  if (process.env.CI) return false
  if (isInGitHooksOrLintStaged()) return false
  return !!(false
    || process.env.VSCODE_PID
    || process.env.VSCODE_CWD
    || process.env.JETBRAINS_IDE
    || process.env.VIM
    || process.env.NVIM
  )
}

export function isInGitHooksOrLintStaged() {
  return !!(false
    || process.env.GIT_PARAMS
    || process.env.VSCODE_GIT_COMMAND
    || process.env.npm_lifecycle_script?.startsWith('lint-staged')
  )
}
