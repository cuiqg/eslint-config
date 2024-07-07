import { ensurePackages, interopDefault } from '../utils'
import { GLOB_VUE } from '../globs'

export async function vue(options = {}) {
  const {
    files = [GLOB_VUE],
    overrides = {},
    stylistic = true,
    vueVersion = 3
  } = options

  await ensurePackages(['eslint-plugin-vue', 'vue-eslint-parser'])

  const { indent = 2 } = typeof stylistic === 'boolean' ? {} : stylistic

  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser'))
  ])

  return [
    {
      name: 'cuiqg/vue',
      files,
      plugins: {
        vue: pluginVue
      },
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
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs.base.rules,

        ...(vueVersion === 2
          ? {
              ...pluginVue.configs.essential.rules,
              ...pluginVue.configs['strongly-recommended'].rules,
              ...pluginVue.configs.recommended.rules
            }
          : {
              ...pluginVue.configs['vue3-essential'].rules,
              ...pluginVue.configs['vue3-strongly-recommended'].rules,
              ...pluginVue.configs['vue3-recommended'].rules
            }),

        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style']
          }
        ],

        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        // this is deprecated
        'vue/component-tags-order': 'off',
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineSlots'
            ]
          }
        ],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-indent': ['error', indent],
        'vue/html-quotes': ['error', 'double'],
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
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { nonwords: false, words: true }],

        ...overrides
      }
    }
  ]
}
