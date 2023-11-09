import { GLOB_JS } from '../globs'
import { pluginJsdoc } from '../plugins'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export const jsdoc = [
  {
    files: [GLOB_JS],
    plugins: {
      jsdoc: pluginJsdoc,
    },
    rules: {
      'jsdoc/check-alignment': 'warn',
      'jsdoc/multiline-blocks': 'warn',
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
      'jsdoc/require-returns-check': 'warn',
      'jsdoc/require-returns-description': 'warn',
      'jsdoc/require-yields-check': 'warn',
    },
  },
]
