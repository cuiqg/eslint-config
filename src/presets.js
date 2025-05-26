import { composer } from 'eslint-flat-config-utils'
import {
  autoImport,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  macros,
  prettier,
  gitignore,
  sortJsconfig,
  sortPackageJson,
  stylistic,
  unicorn,
  unocss,
  vue,
  yaml,
  disables,
  toml,
  pnpm
} from './configs'

import { hasUnocss, hasVue } from './env'

export const defaultPluginRenaming = {
  '@stylistic': 'style',
  'import-x': 'import',
  'n': 'node',
  'yml': 'yaml'
}

export function cuiqg(options = {}, ...userConfigs) {
  const {
    prettier: enablePrettier = false,
    gitignore: enableGitignore = true,
    unocss: enableUnocss = hasUnocss,
    pnpm: enablePnpm = false,
    vue: enableVue = hasVue,
    stylistic: enableStylistic = true,
    jsdoc: enableJsdoc = false
  } = options

  const configs = []

  configs.push(
    autoImport(),
    ignores(),
    javascript(),
    comments(),
    node(),
    imports(),
    unicorn(),
    macros(),
    jsonc(),
    sortPackageJson(),
    sortJsconfig(),
    yaml(),
    toml(),
    disables()
  )

  if (enableGitignore) {
    configs.push(
      gitignore()
    )
  }

  if (enableStylistic) {
    configs.push(
      stylistic()
    )
  }

  if (enablePnpm) {
    configs.push(
      pnpm()
    )
  }

  if (enableVue) {
    configs.push(
      vue()
    )
  }

  if (enableUnocss) {
    configs.push(
      unocss()
    )
  }

  if (enablePrettier) {
    configs.push(
      prettier()
    )
  }

  if (enableJsdoc) {
    configs.push(
      jsdoc()
    )
  }

  return composer(...configs).append(...userConfigs).renamePlugins(defaultPluginRenaming)
}
