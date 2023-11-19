import fs from 'node:fs'
import { isPackageExists } from 'local-pkg'

import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  perfectionist,
  sortJsconfig,
  sortPackageJson,
  stylistic,
  unicorn,
  unocss,
  vue,
  yaml,
} from './configs'

import { combine } from './utils'

const flatConfigProps = [
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
]

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
]

const UnocssPackages = [
  'unocss',
  '@unocss/webpack',
  '@unocss/nuxt',
]

/**
 * @param {{}} [options]
 * @param {...*} userConfigs
 * @returns { import('eslint-define-config').FlatESLintConfigItem }
 */
export function cuiqg(options = {}, ...userConfigs) {
  const {
    componentExts = [],
    overrides = {},
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
    unocss: enableUnocss = UnocssPackages.some(i => isPackageExists(i)),
  } = options

  const stylisticOptions = (options.stylistic === false ? false : (typeof options.stylistic === 'object' ? options.stylistic : {}))

  if (stylisticOptions && !('jsx' in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true

  const configs = [
    ignores(),
    javascript({
      overrides: overrides.javascript,
    }),
    comments(),
    jsdoc({
      stylistic: stylisticOptions,
    }),
    imports({
      stylistic: stylisticOptions,
    }),
    unicorn(),
    perfectionist(),
  ]

  if (fs.existsSync('.eslintrc-auto-import.json')) {
    const fileUrl = new URL('./.eslintrc-auto-import.json', import.meta.url)
    const autoImport = JSON.parse(fs.readFileSync(fileUrl))

    configs.push([{
      languageOptions: {
        globals: autoImport.globals,
      },
    }])
  }

  if (enableVue) {
    componentExts.push('.vue')
    configs.push(vue({
      overrides: overrides.vue,
      stylistic: stylisticOptions,
    }))
  }

  if (stylisticOptions)
    configs.push(stylistic(stylisticOptions))

  if (enableUnocss) {
    configs.push(unocss({
      overrides: overrides.unocss,
    }))
  }

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: overrides.jsonc,
        stylistic: stylisticOptions,
      }),
      sortPackageJson(),
      sortJsconfig(),
    )
  }

  if (options.yaml ?? true) {
    configs.push(yaml({
      overrides: overrides.yaml,
      stylistic: stylisticOptions,
    }))
  }

  if (options.markdown ?? true) {
    configs.push(markdown({
      componentExts,
      overrides: overrides.markdown,
    }))
  }

  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key]

    return acc
  }, {})

  if (Object.keys(fusedConfig).length > 0)
    configs.push([fusedConfig])

  const merged = combine(
    ...configs,
    ...userConfigs,
  )

  return merged
}
