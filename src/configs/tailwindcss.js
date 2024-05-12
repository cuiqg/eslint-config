import { pluginTailwindCSS } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function tailwindcss() {
  return [
    {
      plugins: {
        tailwindcss: pluginTailwindCSS,
      },
      rules: {
        ...pluginTailwindCSS.configs.recommended.rules,
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ]
}
