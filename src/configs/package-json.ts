import type { FlatConfigItem } from '../types'
import { interopDefault } from '../utils'

export async function packageJson(): Promise<FlatConfigItem[]> {
  const [pluginPackageJson, parserJson] = await Promise.all([
    interopDefault(import('eslint-plugin-package-json')),
    interopDefault(import('jsonc-eslint-parser')),
  ] as const)

  return [
    {
      files: ['**/package.json'],
      plugins: {
        'package-json': pluginPackageJson,
      },
      name: 'cuiqg/package-json/setup',
      languageOptions: {
        parser: parserJson,
      },
    },
    {
      name: 'cuiqg/package-json/rules',
      rules: {
        ...pluginPackageJson.configs.recommended.rules,
      },
    },
  ]
}
