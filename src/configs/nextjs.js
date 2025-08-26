import { GLOB_SRC } from '../globs'
import { interopDefault } from '../utils'

function normalizeRules(rules) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [key, typeof value === 'string' ? [value] : value]),
  )
}

export async function nextjs() {
  const files = [GLOB_SRC]

  const pluginNextJS = await interopDefault(import('@next/eslint-plugin-next'))

  return [
    {
      name: 'cuiqg/nextjs',
      files,
      plugins: {
        next: pluginNextJS,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      rules: {
        ...normalizeRules(pluginNextJS.configs.recommended.rules),
        ...normalizeRules(pluginNextJS.configs['core-web-vitals'].rules),
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
