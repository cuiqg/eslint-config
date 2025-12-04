import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  ignores,
  javascript,
  jsdoc,
  macros,
  packageJson,
  prettier,
  stylistic,
  tailwindcss,
  unocss,
  vue,
  formatters
} from './configs'

import { hasUnocss, hasTailwindcss, hasVue } from './env'

export const defaultPluginRenaming = {
  '@stylistic': 'style',
  '@typescript-eslint': 'ts'
}

/**
 *
 * @param {object} options - 设置选项
 * @param {boolean} [options.prettier=false] - 是否启用 prettier 格式化
 * @param {boolean} [options.unocss] - 是否启用 unocss 格式化
 * @param {boolean} [options.tailwindcss] - 是否启用 tailwindcss 格式化
 * @param {boolean} [options.vue] - 是否启用 vue 格式化
 * @param {boolean|object} [options.formatter=true] - 是否启用格式化
 * @param {...Object} userConfigs - 用户配置
 * @returns {Promise<Object[]>} 合并后的配置
 */
export function cuiqg(
  options = {},
  ...userConfigs
) {
  const {
    prettier: enablePrettier = false,
    unocss: enableUnocss = hasUnocss(),
    tailwindcss: enableTailwindcss = hasTailwindcss(),
    vue: enableVue = hasVue(),
    formatter: enableFormatter = true
  } = options

  const configs = []

  configs.push(
    ignores(),
    javascript(),
    jsdoc(),
    stylistic(),
    packageJson(),
  )

  if (enableVue) {
    configs.push(vue(), macros())
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

  if(enableFormatter) {
    configs.push(formatters(
      typeof enableFormatter === 'object'
      ? enableFormatter
      : {}
    ))
  }

  let composer = new FlatConfigComposer()

  composer = composer
    .append(...configs, ...userConfigs)
    .renamePlugins(defaultPluginRenaming)

  return composer
}
