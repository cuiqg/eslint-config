import type { FlatConfigItem } from '../types'
import { interopDefault } from '../utils'

export async function packageJson(): Promise<FlatConfigItem[]> {
  const [pluginPackageJson, pluginDepend, parserJsonc] = await Promise.all([
    interopDefault(import('eslint-plugin-package-json')),
    interopDefault(import('eslint-plugin-depend')),
    interopDefault(import('jsonc-eslint-parser')),
  ])

  return [
    {
      files: ['**/package.json'],
      plugins: {
        depend: pluginDepend,
        'package-json': pluginPackageJson,
      },
      languageOptions: {
        parser: parserJsonc,
      },
      name: 'cuiqg/package-json',
      rules: {
        'depend/ban-dependencies': 'error',
        ...pluginPackageJson.configs.recommended.rules,
      },
      settings: {
        packageJson: {
          enforceForPrivate: false,
        },
      },
    },
  ]
}
