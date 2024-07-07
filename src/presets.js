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
  sortJsconfig,
  sortPackageJson,
  stylistic,
  unicorn,
  unocss,
  vue,
  yaml
} from './configs'

export const defaultPluginRenaming = {
  '@stylistic': 'style',
  'import-x': 'import',
  'n': 'node',
  'yml': 'yaml'
}

export function cuiqg(options = {}, ...userConfigs) {
  const {
    autoRenamePlugins = true,
    prettier: enablePrettier = false,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
    stylistic: enableStylistic = true
  } = options

  const configs = []

  configs.push(
    ignores(),
    javascript({
      overrides: getOverrides(options, 'javascript')
    }),
    comments({
      overrides: getOverrides(options, 'comments')
    }),
    node({
      overrides: getOverrides(options, 'node')
    }),
    imports({
      overrides: getOverrides(options, 'import-x')
    }),
    unicorn({
      overrides: getOverrides(options, 'unicorn')
    })
  )

  if (enableStylistic) {
    configs.push(
      stylistic({
        ...resolveSubOptions(options, 'stylistic'),
        overrides: getOverrides(options, 'stylistic')
      })
    )
  }

  if (enableVue) {
    configs.push(
      vue({
        ...resolveSubOptions(options, 'vue'),
        overrides: getOverrides(options, 'vue')
      })
    )
  }

  if (enableUnocss) {
    configs.push(
      unocss({
        ...resolveSubOptions(options, 'unocss'),
        overrides: getOverrides(options, 'unocss')
      })
    )
  }

  if (enablePrettier) {
    configs.push(
      prettier({
        overrides: getOverrides(options, 'prettier')
      })
    )
  }

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: getOverrides(options, 'jsonc')
      }),
      sortPackageJson(),
      sortJsconfig()
    )
  }

  if (options.yaml ?? true) {
    configs.push(
      yaml({
        overrides: getOverrides(options, 'yaml')
      })
    )
  }

  let composer = new FlatConfigComposer()

  composer = composer.append(...configs, ...userConfigs)

  if (autoRenamePlugins) {
    composer = composer.renamePlugins(defaultPluginRenaming)
  }

  return composer
}
