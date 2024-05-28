import { hasUnocss, hasVue } from './env'

import {
  comments,
  ignores,
  imports,
  javascript,
  perfectionist,
  prettier,
  sorts,
  unicorn,
  unocss,
  vue,
  jsonc
} from './configs'

/**
 * @param Object options
 * @param {import('eslint-define-config').FlatESLintConfigItem[]} userConfigs
 * @returns {import('eslint-define-config').FlatESLintConfigItem[]}
 */
export function cuiqg(options = {}, userConfigs = []) {
  const {
    prettier: enablePrettier = false,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
  } = options

  const configs = [
    ...ignores,
    ...javascript,
    ...comments,
    ...imports,
    ...unicorn,
    ...perfectionist,
    ...sorts,
    ...jsonc
  ]

  if (enableVue) {
    configs.push(...vue)
  }

  if (enablePrettier) {
    configs.push(...prettier)
  }

  if (enableUnocss) {
    configs.push(...unocss)
  }

  return [...configs, ...userConfigs].flat()
}
