import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function vue() {
  const [pluginVue, parserVue] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
  ])

  return [
    {
      files: [GLOB_VUE],
      languageOptions: {
        ecmaVersion: 'latest',
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
        parser: parserVue,
        parserOptions: {
          extraFileExtensions: ['.vue'],
          sourceType: 'module',
        },
      },
      plugins: {
        vue: pluginVue,
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs['vue3-recommended'].rules,
      },
    },
  ]
}
