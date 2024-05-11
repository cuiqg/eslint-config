import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function unocss() {
  const pluginUnoCSS = await interopDefault(import('@unocss/eslint-plugin'))

  return [pluginUnoCSS.flat]
}
