import { FlatConfigComposer } from 'eslint-flat-config-utils'
import {
  autoImport,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  sortJsconfig,
  sortPackageJson,
  stylistic,
  unicorn,
  unocss,
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
    unocss: enableUnocss = hasUnocss,
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
