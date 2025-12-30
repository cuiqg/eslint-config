import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

export async function vue(options = {}) {

  const {
    typescript = false,
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
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style'],
          },
        ],
        'vue/comment-directive': 'error',
        'vue/component-api-style': 'error',
        'vue/component-definition-name-casing': ['error', 'kebab-case'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/component-options-name-casing': ['error', 'kebab-case'],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/define-emits-declaration': 'error',
        'vue/define-props-declaration': 'error',
        'vue/define-props-destructuring': [
          'error',
          {
            destructure: 'always',
          },
        ],
        'vue/enforce-style-attribute': [
          'error',
          {
            allow: ['scoped', 'plain'],
          },
        ],
        "vue/max-attributes-per-line": ["error",{
          "singleline": {
            "max": 1
          },
          "multiline": {
            "max": 1
          }
        }],
        'vue/html-button-has-type': 'error',
        'vue/html-end-tags': 'error',
        'vue/jsx-uses-vars': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-child-content': 'error',
        'vue/no-computed-properties-in-data': 'error',
        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-deprecated-delete-set': 'error',
        'vue/no-deprecated-destroyed-lifecycle': 'error',
        'vue/no-deprecated-dollar-listeners-api': 'error',
        'vue/no-deprecated-dollar-scopedslots-api': 'error',
        'vue/no-deprecated-events-api': 'error',
        'vue/no-deprecated-filter': 'error',
        'vue/no-deprecated-functional-template': 'error',
        'vue/no-deprecated-html-element-is': 'error',
        'vue/no-deprecated-inline-template': 'error',
        'vue/no-deprecated-model-definition': 'error',
        'vue/no-deprecated-props-default-this': 'error',
        'vue/no-deprecated-router-link-tag-prop': 'error',
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/no-deprecated-v-bind-sync': 'error',
        'vue/no-deprecated-v-is': 'error',
        'vue/no-deprecated-v-on-native-modifier': 'error',
        'vue/no-deprecated-v-on-number-modifiers': 'error',
        'vue/no-deprecated-vue-config-keycodes': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-duplicate-attributes': 'error',
        'vue/no-duplicate-class-names': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-export-in-script-setup': 'error',
        'vue/no-expose-after-await': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-lone-template': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-negated-condition': 'error',
        'vue/no-negated-v-if-condition': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-potential-component-option-typo': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-ref-object-reactivity-loss': 'error',
        'vue/no-required-prop-with-default': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-reserved-props': 'error',
        'vue/no-setup-props-reactivity-loss': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-template-shadow': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/no-undef-components': 'error',
        'vue/no-undef-properties': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-emit-declarations': 'error',
        'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-use-v-else-with-v-for': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-template-attributes': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-v-html': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/prefer-define-options': 'error',
        'vue/prefer-import-from-vue': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-component-is': 'error',
        'vue/require-default-prop': 'error',
        'vue/require-emit-validator': 'error',
        'vue/require-explicit-emits': 'error',
        'vue/require-explicit-slots': 'error',
        'vue/require-macro-variable-name': [
          'error',
          {
            defineEmits: 'emit',
            defineProps: 'props',
            defineSlots: 'slots',
            useAttrs: 'attrs',
            useSlots: 'slots',
          },
        ],
        'vue/require-name-property': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-slots-as-functions': 'error',
        'vue/require-toggle-inside-transition': 'error',
        'vue/require-typed-ref': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/this-in-template': 'error',
        'vue/use-v-on-exact': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-event-hyphenation': 'error',
        'vue/v-on-style': 'error',
        'vue/v-slot-style': 'error',
        'vue/valid-attribute-name': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-options': 'error',
        'vue/valid-define-props': 'error',
        'vue/valid-next-tick': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-is': 'error',
        'vue/valid-v-memo': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',
      }
    }
  ]
}
