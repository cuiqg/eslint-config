import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  ignores,
  javascript,
  jsdoc,
  comments,
  macros,
  packageJson,
  stylistic,
  tailwindcss,
  typescript,
  unocss,
  vue
} from './configs'

import { hasUnocss, hasTailwindcss, hasVue, hasTypeScript, isInEditor } from './env'

/**
 *
 * @param {object} options - 设置选项
 * @param {boolean} [options.typescript] - 是否启用 TypeScript 格式化
 * @param {boolean} [options.unocss] - 是否启用 Unocss 格式化
 * @param {boolean} [options.tailwindcss] - 是否启用 TailwindCSS 格式化
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
    unocss: enableUnocss = hasUnocss(),
    tailwindcss: enableTailwindcss = hasTailwindcss(),
    typescript: enableTypescript = hasTypeScript(),
    vue: enableVue = hasVue()
  } = options

  const configs = []

  configs.push(
    ignores(),
    comments(),
    javascript({
      isInEditor
    }),
    stylistic(),
    packageJson(),
  )

  if (enableTypescript) {
    configs.push(typescript())
  }

  if (enableJsdoc) {
    configs.push(jsdoc())
  }

  if (enableVue) {
    configs.push(
      vue({
        typescript: enableTypescript
      }),
      macros()
    )
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (enableTailwindcss) {
    configs.push(tailwindcss())
  }

  let composer = new FlatConfigComposer()

  composer = composer
    .append(...configs, ...userConfigs)

  if (isInEditor) {
    composer = composer.disableRulesFix([
      'unused-imports/no-unused-imports'
    ], {
      builtinRules: () => import(['eslint', 'use-at-your-own-risk'].join('/')).then(r => r.builtinRules),
    })
  }

  return composer
}
