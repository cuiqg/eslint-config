import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

/**
 * Vue
 *
 * @see https://eslint.vuejs.org/
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function vue() {
  const files = [GLOB_VUE]

  const pluginVue = await interopDefault(import('eslint-plugin-vue'))

  return [
    {
      files,
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          definePage: 'readonly',
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
        }
      },
      name: 'cuiqg/vue',
      plugins: {
        vue: pluginVue
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs['vue3-essential'].rules,
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        ...pluginVue.configs['flat/recommended'].rules,

        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style', 'route']
          }
        ],
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
        'vue/no-unused-vars': 'off'
      }
    }
  ]
}
