import { GLOB_VUE } from '../globs'
import { parserVue, pluginVue } from '../plugins'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function vue() {
  return [
    {
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
      files: [GLOB_VUE],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          extraFileExtensions: ['.vue'],
          sourceType: 'module',
        },
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs.base.rules,
        ...pluginVue.configs['vue3-essential'].rules,
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        ...pluginVue.configs['vue3-recommended'].rules,
      },
    },
  ]
}
