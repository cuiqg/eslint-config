import { hasTailwindCSS, hasUnocss, hasVue } from './env'

import {
  comments,
  ignores,
  imports,
  javascript,
  perfectionist,
  prettier,
  sorts,
  tailwindcss,
  unicorn,
  unocss,
  vue,
} from './configs'

import { combine } from './utils'

/**
 * @returns {import('eslint-define-config').FlatESLintConfigItem[]}
 */
export function cuiqg(options = {}, ...userConfigs) {
  const {
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss,
    tailwindcss: enableTailwindCSS = hasTailwindCSS,
    vue: enableVue = hasVue,
  } = options

  const configs = [
    ignores(),
    javascript(),
    comments(),
    imports(),
    unicorn(),
    perfectionist(),
    sorts(),
  ]

  if (enableVue) {
    configs.push(vue())
  }

  if (enablePrettier) {
    configs.push(prettier())
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (enableTailwindCSS) {
    configs.push(tailwindcss())
  }

  const merged = combine(...configs, ...userConfigs)

  return merged
}
