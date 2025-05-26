import { FlatConfigComposer } from 'eslint-flat-config-utils'
import {
  comments,
  disables,
  gitignore,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  macros,
  pnpm,
  prettier,
  sortJsconfig,
  sortPackageJson,
  stylistic,
  toml,
  unicorn,
  unocss,
  unplugin,
  vue,
  yaml
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
    vue: enableVue = hasVue,
    stylistic: enableStylistic = true,
    jsdoc: enableJsdoc = false,
    pnpm: enablePnpm = false
  } = options

  const configs = [
    unplugin(),
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
  ]

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

  if (enablePnpm) {
    configs.push(
      pnpm()
    )
  }

  let composer = new FlatConfigComposer(...configs, ...userConfigs)
  composer = composer.renamePlugins(defaultPluginRenaming)

  return composer
}
