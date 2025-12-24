import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  ignores,
  javascript,
  jsdoc,
  comments,
  macros,
  packageJson,
  prettier,
  stylistic,
  tailwindcss,
  unocss,
  vue
} from './configs'

import { hasUnocss, hasTailwindcss, hasVue, hasPrettier } from './env'

export const defaultPluginRenaming = {

}

/**
 *
 * @param {object} options - 设置选项
 * @param {boolean} [options.prettier] - 是否启用 Prettier 格式化
 * @param {boolean} [options.unocss] - 是否启用 Unocss 格式化
 * @param {boolean} [options.tailwindcss] - 是否启用 Tailwindcss 格式化
 * @param {boolean} [options.vue] - 是否启用 VUE 格式化
 * @param {boolean} [options.jsdoc=true] - 是否启用 JSDoc 格式化
 * @param {...Object} userConfigs - 用户配置
 *
 * @returns {Promise<Object[]>} 合并后的配置
 */
export function cuiqg(
  options = {},
  ...userConfigs
) {
  const {
    jsdoc: enableJsdoc = true,
    prettier: enablePrettier = hasPrettier(),
    unocss: enableUnocss = hasUnocss(),
    tailwindcss: enableTailwindcss = hasTailwindcss(),
    vue: enableVue = hasVue()
  } = options

  const configs = []

  configs.push(
    ignores(),
    comments(),
    javascript(),
    stylistic(),
    packageJson(),
  )

  if (enableJsdoc) {
    configs.push(jsdoc())
  }

  if (enableVue) {
    configs.push(
      vue(),
      macros()
    )
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (enableTailwindcss) {
    configs.push(tailwindcss())
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
