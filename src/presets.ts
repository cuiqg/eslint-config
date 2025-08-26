import type { Awaitable, FlatConfigItem, OptionsConfig } from './types'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import {
  deMorgan,
  ignores,
  javascript,
  jsdoc,
  nextjs,
  node,
  packageJson,
  perfectionist,
  prettier,
  typescript,
  unocss,
  vue,
} from './configs'

import { isInEditor } from './env'

import { hasNextjs, hasTypeScript, hasUnoCss, hasVue } from './env'

export const defaultPluginRenaming = {
  '@next/next': 'next',
  n: 'node',
  vitest: 'test',
  yml: 'yaml',
  '@typescript-eslint': 'ts',
}

export function cuiqg(
  options: OptionsConfig & Omit<FlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<FlatConfigItem | FlatConfigItem[]>[]
): FlatConfigComposer<FlatConfigItem, string> {
  const {
    prettier: enablePrettier = false,
    typescript: enableTypeScript = hasTypeScript(),
    vue: enableVue = hasVue(),
    unocss: enableUnocss = hasUnoCss(),
    nextjs: enableNextjs = hasNextjs(),
  } = options

  const configs: Awaitable<FlatConfigItem[]>[] = []

  configs.push(packageJson(), ignores(), node(), deMorgan(), javascript(), jsdoc(), perfectionist())

  if (enableTypeScript) {
    configs.push(typescript())
  }

  if (enableVue) {
    configs.push(vue())
  }

  if (enableUnocss) {
    configs.push(unocss())
  }

  if (enableNextjs) {
    configs.push(nextjs())
  }

  if (enablePrettier) {
    configs.push(prettier())
  }

  let composer = new FlatConfigComposer<FlatConfigItem, string>()

  composer = composer
    .append(...configs, ...(userConfigs as any))
    .renamePlugins(defaultPluginRenaming)

  if (isInEditor()) {
    composer = composer.disableRulesFix(
      ['unused-imports/no-unused-imports', 'test/no-only-tests', 'prefer-const'],
      {
        builtinRules: () =>
          import(['eslint', 'use-at-your-own-risk'].join('/')).then(r => r.builtinRules),
      },
    )
  }

  return composer
}
