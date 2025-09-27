import { interopDefault } from '../utils'

export async function packageJson() {
  const [pluginPackageJson, parserJsonc] = await Promise.all([
    interopDefault(import('eslint-plugin-package-json')),
    interopDefault(import('jsonc-eslint-parser'))
  ])

  return [
    {
      files: ['**/package.json'],
      languageOptions: {
        parser: parserJsonc
      },
      name: 'cuiqg/package-json',
      plugins: {
        'package-json': pluginPackageJson
      },
      rules: {
        ...pluginPackageJson.configs.recommended.rules
      },
      settings: {
        packageJson: {
          enforceForPrivate: false
        }
      }
    }
  ]
}
