import { interopDefault } from '../utils'

export async function packageJson() {
  const pluginPackageJson = await interopDefault(import('eslint-plugin-package-json'))

  return [
    {
      ...pluginPackageJson.configs.recommended,
      rules: {
        ...pluginPackageJson.configs.recommended.rules,
        ...pluginPackageJson.configs.stylistic.rules
      },
      name: 'cuiqg/package-json'
    }
  ]
}
