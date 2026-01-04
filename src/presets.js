import { FlatConfigComposer } from 'eslint-flat-config-utils'

import {
  autoImports,
  baseline,
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

import { isInEditor, hasUnocss, hasVue } from './env'

export function cuiqg(
  options = {},
  ...userConfigs
) {
  const {
    jsdoc: enableJsdoc = true,
    unocss: enableUnocss = hasUnocss(),
    tailwindcss: enableTailwindcss = false,
    typescript: enableTypescript = false,
    vue: enableVue = hasVue()
  } = options

  const configs = []

  configs.push(
    autoImports(),
    baseline(),
    ignores(),
    comments(),
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

  const composer = new FlatConfigComposer(
    ...configs,
    ...userConfigs
  )

  return composer
}
