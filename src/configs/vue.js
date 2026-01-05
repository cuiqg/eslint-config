import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

export async function vue(options = {}) {
  const {
    typescript = false
  } = options

  let parserOptions = null

  const files = [GLOB_VUE]

  const [
    pluginVue,
    parserVue
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser'))
  ])

  if (typescript) {
    const parserTs = await interopDefault(import('@typescript-eslint/parser'))

    parserOptions = {
      parser: parserTs
    }
  }

  return [
    {
      files,
      name: 'cuiqg/vue',
      plugins: {
        vue: pluginVue
      },
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 'latest',
          extraFileExtensions: ['.vue'],
          sourceType: 'module',
          ...parserOptions
        }
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...(pluginVue.configs['flat/recommended'].map(c => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {})),

        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style']
          }
        ],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-self-closing': [
          'error',
          {
            html: {
              component: 'always',
              normal: 'always',
              void: 'any'
            },
            math: 'always',
            svg: 'always'
          }
        ],
        'vue/max-attributes-per-line': 'off',

        'vue/multi-word-component-names': 'off',
        'vue/no-constant-condition': 'warn',
        'vue/no-empty-pattern': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-ref-as-operand': 'off',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',

        'vue/no-v-html': 'off',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        'vue/one-component-per-file': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-template': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/return-in-computed-property': [
          'error',
          { treatUndefinedAsUnspecified: false }
        ]
      }
    }
  ]
}
