import { pluginUnoCSS } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function unocss() {
  return [pluginUnoCSS.configs.flat]
}
