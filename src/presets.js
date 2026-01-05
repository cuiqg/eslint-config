import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  autoImports,
  baseline,
  ignores,
  javascript,
  jsdoc,
  macros,
  packageJson,
  stylistic,
  tailwindcss,
  typescript,
  unocss,
  vue,
  nextjs,
  css
} from './configs'

import { isInEditor, hasUnocss, hasVue } from './env'

/**
 *
 * @param {object} [options]
 * @param {boolean} [options.jsdoc]
 * @param {boolean} [options.unocss]
 * @param {boolean} [options.tailwindcss]
 * @param {boolean} [options.typescript]
 * @param {boolean} [options.vue]
 * @param {boolean} [options.nextjs]
 * @param {boolean} [options.css]
 * @param {...object} userConfigs
 * @returns {FlatConfigComposer}  FlatConfigComposer
 */
export function cuiqg(
  options = {},
  ...userConfigs
) {
  const {
    jsdoc: enableJsdoc = true,
    unocss: enableUnocss = hasUnocss(),
    tailwindcss: enableTailwindcss = false,
    typescript: enableTypescript = false,
    vue: enableVue = hasVue(),
    nextjs: enableNextjs = false,
    css: enableCSS = false
  } = options

  const configs = []

  configs.push(
    autoImports(),
    baseline(),
    ignores(),
    javascript({
      isInEditor
    }),
    stylistic(),
    packageJson()
  )

  if (enableTypescript) {
    configs.push(typescript())
  }

  if (enableJsdoc) {
    configs.push(jsdoc())
  }
  if (enableCSS) {
    configs.push(css())
  }

  if (enableVue) {
    configs.push(
      vue({
        typescript: enableTypescript
      }),
      macros()
    )
  }

  if (enableNextjs) {
    configs.push(nextjs())
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (enableTailwindcss) {
    configs.push(tailwindcss())
  }

  const composer = new FlatConfigComposer(
    ...configs,
    ...userConfigs
  )

  return composer
}
