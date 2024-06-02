import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { getOverrides, resolveSubOptions } from './utils'
import { hasUnocss, hasVue } from './env'

import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  node,
  prettier,
  sortPackageJson,
  sortJsconfig,
  unicorn,
  unocss,
  vue,
  yaml,
} from './configs'

export function cuiqg(options = {}, ...userConfigs) {
  const {
    prettier: enablePrettier = false,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
  } = options

  const configs = []

  configs.push(
    ignores(),
    javascript({
      overrides: getOverrides(options, 'javascript'),
    }),
    comments(),
    node(),
    imports(),
    unicorn()
  )

  if (enableVue) {
    configs.push(
      vue({
        ...resolveSubOptions(options, 'vue'),
        overrides: getOverrides(options, 'vue'),
      })
    )
  }

  if (enablePrettier) {
    configs.push(prettier())
  }

  if (enableUnocss) {
    configs.push(
      unocss({
        ...resolveSubOptions(options, 'unocss'),
        overrides: getOverrides(options, 'unocss'),
      })
    )
  }

  if (options.jsonc ?? true) {
    configs.push(jsonc(), sortPackageJson(), sortJsconfig())
  }

  if (options.yaml ?? true) {
    configs.push(
      yaml({
        overrides: getOverrides(options, 'yaml'),
      })
    )
  }

  let composer = new FlatConfigComposer()

  composer = composer.append(...configs, ...userConfigs)

  return composer
}
