import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  ignores,
  javascript,
  jsdoc,
  macros,
  packageJson,
  prettier,
  stylistic,
  unocss,
  vue
} from './configs'

import { hasUnoCss, hasVue } from './env'

export const defaultPluginRenaming = {
  '@stylistic': 'style'
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
    ignores(),
    javascript(),
    jsdoc(),
    stylistic(),
    packageJson()
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
