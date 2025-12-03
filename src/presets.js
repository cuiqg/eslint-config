import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  compat,
  ignores,
  imports,
  javascript,
  jsdoc,
  macros,
  packageJson,
  prettier,
  stylistic,
  unocss,
  vue,
  unicorn,
  promise
} from './configs'

import { hasUnoCss, hasVue } from './env'

export const defaultPluginRenaming = {
  '@stylistic': 'style',
  '@typescript-eslint': 'ts'
}

/**
 *
 * @param {object} options - 设置选项
 * @param {...any} userConfigs - 用户配置
 * @returns {Promise<any[]>} 合并后的配置
 */
export function cuiqg(
  options = {},
  ...userConfigs
) {
  const {
    prettier: enablePrettier = false,
    unocss: enableUnocss = hasUnoCss(),
    vue: enableVue = hasVue()
  } = options

  const configs = []

  configs.push(
    compat(),
    ignores(),
    javascript(),
    imports(),
    jsdoc(),
    stylistic(),
    packageJson(),
    unicorn(),
    promise()
  )

  if (enableVue) {
    configs.push(vue(), macros())
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (enablePrettier) {
    configs.push(prettier())
  }

  let composer = new FlatConfigComposer()

  composer = composer
    .append(...configs, ...userConfigs)
    .renamePlugins(defaultPluginRenaming)

  return composer
}
