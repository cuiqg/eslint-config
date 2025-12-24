import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

export async function vue() {
  const files = [GLOB_VUE]

  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser'))
  ])

  return [
    {
      files,
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          definePage: 'readonly',
          defineModel: 'readonly',
          defineOptions: 'readonly',
          defineProps: 'readonly',
          defineSlots: 'readonly',
          onActivated: 'readonly',
          onDeactivated: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          useAttrs: 'readonly',
          useSlots: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly'
        },
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: ['.vue'],
          parser: null,
          sourceType: 'module'
        }
      },
      name: 'cuiqg/vue',
      plugins: {
        vue: pluginVue
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...(pluginVue.configs['flat/recommended']
          .map(c => c.rules)
          .reduce((acc, c) => ({ ...acc, ...c }), {})),

        'node/prefer-global/process': 'off',
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error', { after: true, before: true }],
        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style']
          }
        ],
        'vue/block-spacing': ['error', 'always'],
        'vue/block-tag-newline': [
          'error',
          {
            multiline: 'always',
            singleline: 'always'
          }
        ],
        'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': ['error', { after: true, before: false }],
        'vue/comma-style': ['error', 'last'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
          'error',
          {
            order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots']
          }
        ],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-comment-content-spacing': [
          'error',
          'always',
          {
            exceptions: ['-']
          }
        ],
        'vue/html-indent': ['error', 2],
        'vue/html-quotes': ['error', 'double'],
        'vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'vue/keyword-spacing': ['error', { after: true, before: true }],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-dupe-keys': 'off',
        'vue/no-empty-pattern': 'error',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement'
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-setup-props-reactivity-loss': 'off',
        'vue/no-sparse-arrays': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-html': 'off',
        'vue/object-curly-newline': 'off',
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        'vue/operator-linebreak': ['error', 'before'],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/quote-props': ['error', 'consistent-as-needed'],
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { nonwords: false, words: true }],
        'vue/template-curly-spacing': 'error'
      }
    }
  ]
}
