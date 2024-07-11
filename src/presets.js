import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { hasUnocss, hasVue } from './env'

import {
  autoImport,
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  jsdoc,
  node,
  prettier,
  regexp,
  perfectionist,
  sortJsconfig,
  sortPackageJson,
  stylistic,
  unicorn,
  unocss,
  vue,
  yaml
} from './configs'

export const defaultPluginRenaming = {
  '@stylistic': 'style',
  'import-x': 'import',
  'n': 'node',
  'yml': 'yaml'
}

export function cuiqg(options = {}, ...userConfigs) {
  const {
    prettier: enablePrettier = false,
    unocss: enableUnocss = hasUnocss,
    regexp: enableRegexp = true,
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
    perfectionist(),
    jsonc(),
    sortPackageJson(),
    sortJsconfig(),
    yaml()
  )

  if (enableStylistic) {
    configs.push(
      stylistic()
    )
  }

  if (enableRegexp) {
    configs.push(
      regexp()
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

  let composer = new FlatConfigComposer()

  composer = composer.append(...configs, ...userConfigs).renamePlugins(defaultPluginRenaming)

  return composer
}
