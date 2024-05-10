import { interopDefault } from '../utils'
import { GLOB_SRC } from '../globs'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function jsdoc() {
  const jsdoc = await interopDefault(import('eslint-plugin-jsdoc'))

  return [
    {
      files: [GLOB_SRC],
      plugins: {
        jsdoc,
      },
      rules: {
        'jsdoc/check-access': 'warn',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-property-names': 'warn',
        'jsdoc/check-types': 'warn',
        'jsdoc/empty-tags': 'warn',
        'jsdoc/implements-on-classes': 'warn',
        'jsdoc/no-defaults': 'warn',
        'jsdoc/no-multi-asterisks': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-property': 'warn',
        'jsdoc/require-property-description': 'warn',
        'jsdoc/require-property-name': 'warn',
        'jsdoc/require-yields-check': 'warn',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'warn',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-check': 'warn',
        'jsdoc/require-returns-description': 'off',
      },
    },
  ]
}
