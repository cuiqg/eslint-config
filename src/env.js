import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI)
export const hasTypeScript = isPackageExists('typescript')
export const hasVue = ['vue', 'nuxt', 'vitepress', '@slidev/cli'].some(i => isPackageExists(i))
export const hasUnocss = ['unocss', '@unocss/webpack', '@unocss/nuxt'].some(i => isPackageExists(i))
