import { hasUnocss, hasVue } from './env'

import {
  command,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  perfectionist,
  prettier,
  sortJsconfig,
  sortPackageJson,
  unicorn,
  unocss,
  vue,
  yaml,
} from './configs'

import { combine } from './utils'

const flatConfigProps = [
  'name',
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
]

/**
 * @param {{}} options
 * @param {import('eslint-define-config').FlatESLintConfigItem[]} userConfigs
 * @returns {import('eslint-define-config').FlatESLintConfigItem[]}
 */
export function cuiqg(options = {}, ...userConfigs) {
  const {
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
  } = options

  const configs = [
    ignores(),
    javascript(),
    comments(),
    jsdoc(),
    node(),
    imports(),
    unicorn(),
    command(),
    perfectionist(),
  ]

  if (enableVue) {
    configs.push(vue())
  }

  if (enablePrettier) {
    configs.push(prettier())
  }

  if (enableMarkdown) {
    configs.push(markdown())
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (options.jsonc ?? true) {
    configs.push(jsonc(), sortPackageJson(), sortJsconfig())
  }

  if (options.yaml ?? true) {
    configs.push(yaml())
  }

  if (options.markdown ?? true) {
    configs.push(markdown())
  }

  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options) {
      acc[key] = options[key]
    }
    return acc
  }, {})

  if (Object.keys(fusedConfig).length) {
    configs.push([fusedConfig])
  }

  const merged = combine(...configs, ...userConfigs)

  return merged
}
