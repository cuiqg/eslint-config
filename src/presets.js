import { hasUnocss, hasVue } from './env'

import {
  comments,
  ignores,
  imports,
  javascript,
  perfectionist,
  prettier,
  sortJsconfig,
  sortPackageJson,
  unicorn,
  unocss,
  vue,
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
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
  } = options

  const configs = [
    ignores(),
    javascript(),
    comments(),
    imports(),
    unicorn(),
    perfectionist(),
    sortJsconfig(),
    sortPackageJson(),
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

  // eslint-disable-next-line unicorn/no-array-reduce
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options) {
      acc[key] = options[key]
    }
    return acc
  }, {})

  if (Object.keys(fusedConfig).length > 0) {
    configs.push([fusedConfig])
  }

  const merged = combine(...configs, ...userConfigs)

  return merged
}
