import { pluginUnicorn } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem} */
export function unicorn(options = {}) {
  const {
    overrides = {},
  } = options

  return [
    {
      name: 'tsuiqg:unicorn',
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',

        ...overrides,
      },
    },
  ]
}
