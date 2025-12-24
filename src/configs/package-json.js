import { interopDefault } from '../utils'

export async function packageJson() {

  const [pluginPackageJson, pluginDepend, parserJsonc] = await Promise.all([
    interopDefault(import('eslint-plugin-package-json')),
    interopDefault(import('eslint-plugin-depend')),
    interopDefault(import('jsonc-eslint-parser')),
  ])

  return [
    {
      name: 'cuiqg/package-json',
      files: ['**/package.json'],
      plugins: {
        'package-json': pluginPackageJson,
        'depend': pluginDepend
      },
      languageOptions: {
        parser: parserJsonc
      },
      rules: {
        'depend/ban-dependencies': 'error',
        'package-json/bin-name-casing': 'error',
        'package-json/exports-subpaths-style': [
          'error',
          {
            prefer: 'explicit',
          },
        ],
        'package-json/no-empty-fields': 'error',
        'package-json/no-redundant-files': 'error',
        'package-json/no-redundant-publishConfig': 'error',
        'package-json/order-properties': [
          'error',
          {
            order: 'sort-package-json',
          },
        ],
        'package-json/repository-shorthand': [
          'error',
          {
            form: 'shorthand',
          },
        ],
        'package-json/require-author': 'error',
        'package-json/require-description': 'error',
        'package-json/require-engines': 'error',
        'package-json/require-keywords': 'error',
        'package-json/require-name': 'error',
        'package-json/require-type': 'error',
        'package-json/require-version': 'error',
        'package-json/scripts-name-casing': 'error',
        'package-json/sort-collections': 'error',
        'package-json/specify-peers-locally': 'error',
        'package-json/unique-dependencies': 'error',
        'package-json/valid-author': 'error',
        'package-json/valid-bin': 'error',
        'package-json/valid-dependencies': 'error',
        'package-json/valid-description': 'error',
        'package-json/valid-directories': 'error',
        'package-json/valid-files': 'error',
        'package-json/valid-homepage': 'error',
        'package-json/valid-keywords': 'error',
        'package-json/valid-license': 'error',
        'package-json/valid-name': 'error',
        'package-json/valid-scripts': 'error',
        'package-json/valid-version': 'error',
      }
    }
  ]
}
