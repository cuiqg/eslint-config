/**
 * Vue Macros
 * @see https://vue-macros.dev/zh-CN/guide/eslint-integration.html
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const macros = () => {
  return [
    {
      name: 'cuiqg/macros',
      languageOptions: {
        globals: {
          $: 'readonly',
          $$: 'readonly',
          $computed: 'readonly',
          $customRef: 'readonly',
          $defineModels: 'readonly',
          $defineProps: 'readonly',
          $definePropsRefs: 'readonly',
          $ref: 'readonly',
          $shallowRef: 'readonly',
          $toRef: 'readonly',
          defineEmit: 'readonly',
          defineModels: 'readonly',
          defineOptions: 'readonly',
          defineProp: 'readonly',
          defineProps: 'readonly',
          defineRender: 'readonly',
          defineSetupComponent: 'readonly',
          defineSlots: 'readonly'
        }
      },
      rules: {
        'vue/no-export-in-script-setup': 'off',
        'vue/valid-attribute-name': 'off',
        'vue/valid-define-props': 'off',
        'vue/valid-v-bind': 'off'
      }
    }
  ]
}
