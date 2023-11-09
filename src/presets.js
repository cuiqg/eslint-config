import { hasUnocss, hasVue } from './env'

import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  sortJsconfig,
  sortKeys,
  sortPackageJson,
  unicorn,
  unocss,
  vue,
  yml,
} from './configs'

export const presetJavaScript = [...ignores, ...jsdoc, ...javascript, ...comments, ...imports, ...unicorn]

export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortJsconfig]
export const presetLangsExtensions = [...markdown, ...yml, ...presetJsonc]

export const basic = [...presetJavaScript]
export { basic as presetBasic }

export const all = [...basic, ...presetLangsExtensions, ...sortKeys, ...vue, ...unocss]

/**
 * Construct an array of ESLint flat config items.
 * @type {import('eslint-define-config').FlatESLintConfigItem}
 */
export function cuiqg(config = [], options = {}) {
  const {
    vue: enableVue = hasVue,
    markdown: enableMarkdown = true,
    sortKeys: enableSortKeys = true,
    unocss: enableUnocss = hasUnocss,
  } = options

  const configs = [...basic, ...yml, ...presetJsonc]

  if (enableSortKeys) {
    configs.push(...sortKeys)
  }
  if (enableVue) {
    configs.push(...vue)
  }
  if (enableMarkdown) {
    configs.push(...markdown)
  }
  if (enableUnocss) {
    configs.push(...unocss)
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
