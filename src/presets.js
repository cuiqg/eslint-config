import { FlatConfigComposer } from 'eslint-flat-config-utils'
import {
  deMorgan,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  nextjs,
  node,
  packageJson,
  perfectionist,
  prettier,
  stylistic,
  unocss,
  vue,
} from './configs'

import { isInEditor } from './env'

import { hasNextjs, hasTypeScript, hasUnoCss, hasVue } from './env'

export const defaultPluginRenaming = {
  '@next/next': 'next',
  n: 'node',
  vitest: 'test',
  'import-lite': 'import',
  '@stylistic': 'style',
}

export function cuiqg(
  options = {},
  ...userConfigs
) {
  const {
    prettier: enablePrettier = false,
    imports: enableImports = true,
    vue: enableVue = hasVue(),
    unocss: enableUnocss = hasUnoCss(),
    nextjs: enableNextjs = hasNextjs(),
  } = options

  const configs = []

  configs.push(
    deMorgan(),
    ignores(),
    javascript(),
    jsdoc(),
    jsonc(),
    stylistic(),
    perfectionist()
  )

  if (enableImports) {
    configs.push(imports())
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

  let composer = new FlatConfigComposer()

  composer = composer
    .append(...configs, ...userConfigs)
    .renamePlugins(defaultPluginRenaming)

  if (isInEditor()) {
    composer = composer.disableRulesFix(
      ['unused-imports/no-unused-imports', 'prefer-const'],
      {
        builtinRules: () =>
          import(['eslint', 'use-at-your-own-risk'].join('/')).then(r => r.builtinRules),
      },
    )
  }

  return composer
}
