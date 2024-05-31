import { interopDefault, ensurePackages } from '../utils'
import { GLOB_VUE } from '../globs'

export async function vue(options = {}) {
  const { files = [GLOB_VUE], overrides = {}, vueVersion = 3 } = options

  await ensurePackages(['eslint-plugin-vue', 'vue-eslint-parser'])

  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
  ])

  return [
    {
      name: 'cuiqg/vue/setup',
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
      plugins: {
        vue: pluginVue,
      },
    },
    {
      name: 'cuiqg/vue/rules',
      files,
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: null,
          sourceType: 'module',
        },
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs.base.rules,

        ...(vueVersion === 2
          ? {
              ...pluginVue.configs.essential.rules,
              ...pluginVue.configs['strongly-recommended'].rules,
              ...pluginVue.configs.recommended.rules,
            }
          : {
              ...pluginVue.configs['vue3-essential'].rules,
              ...pluginVue.configs['vue3-strongly-recommended'].rules,
              ...pluginVue.configs['vue3-recommended'].rules,
            }),

        'vue/block-order': ['warn', { order: ['script', 'template', 'style'] }],
        'vue/component-api-style': ['warn', ['script-setup', 'composition']],
        'vue/component-name-in-template-casing': [
          'warn',
          'PascalCase',
          { registeredComponentsOnly: false, ignores: [] },
        ],
        'vue/component-options-name-casing': ['warn', 'PascalCase'],
        'vue/custom-event-name-casing': ['warn', 'camelCase'],
        'vue/define-emits-declaration': ['warn', 'type-based'],
        'vue/define-macros-order': 'off',
        // 'vue/define-macros-order': [
        //   'warn',
        //   {
        //     order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots']
        //   }
        // ],
        'vue/define-props-declaration': ['warn', 'type-based'],
        'vue/html-comment-content-newline': 'warn',
        'vue/multi-word-component-names': 'warn',
        'vue/next-tick-style': ['warn', 'promise'],
        'vue/no-duplicate-attr-inheritance': 'warn',
        'vue/no-required-prop-with-default': 'warn',
        'vue/no-static-inline-styles': 'warn',
        'vue/no-template-target-blank': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/no-undef-properties': 'warn',
        'vue/no-unsupported-features': 'warn',
        'vue/no-unused-emit-declarations': 'warn',
        'vue/no-unused-properties': 'warn',
        'vue/no-unused-refs': 'warn',
        'vue/no-use-v-else-with-v-for': 'error',
        'vue/no-useless-mustaches': 'warn',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-text': 'warn',
        'vue/padding-line-between-blocks': 'warn',
        'vue/prefer-define-options': 'warn',
        'vue/prefer-separate-static-class': 'warn',
        // 'vue/prefer-true-attribute-shorthand': 'warn',
        'vue/prop-name-casing': ['warn', 'camelCase'],
        'vue/require-macro-variable-name': [
          'warn',
          {
            defineProps: 'props',
            defineEmits: 'emit',
            defineSlots: 'slots',
            useSlots: 'slots',
            useAttrs: 'attrs',
          },
        ],
        'vue/valid-define-options': 'warn',

        ...overrides,
      },
    },
  ]
}
