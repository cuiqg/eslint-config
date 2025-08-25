import type { FlatConfigItem } from '../types'
import { GLOB_SRC } from '../globs'
import { interopDefault } from '../utils'

function normalizeRules(rules: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [key, typeof value === 'string' ? [value] : value]),
  )
}

export async function nextjs(): Promise<FlatConfigItem[]> {
  const files = [GLOB_SRC]

  const pluginNextJS = await interopDefault(import('@next/eslint-plugin-next'))

  return [
    {
      name: 'cuiqg/nextjs/setup',
      plugins: {
        next: pluginNextJS,
      },
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: 'cuiqg/nextjs/rules',
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
