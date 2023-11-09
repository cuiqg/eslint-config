import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginJsdoc from "eslint-plugin-jsdoc"

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": [
        'warn',
        {
          args: 'none',
          vars: 'all',
          caughtErrors: 'none',
          ignoreRestSiblings: true
        },
      ],
      'arrow-spacing': ['error', { before: true, after: true }],
      'block-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'object-curly-newline': ['error', { multiline: true, consistent: true }],
      "object-curly-spacing": ["error", "always"],
    }
  },
  {
    files: ["**/*.js"],
    plugins: {
      jsdoc: pluginJsdoc
    },
    rules: {
      ...pluginJsdoc.configs.recommended.rules
    }
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue
    },
    rules: {
      ...pluginVue.configs['vue3-recommended'].rules
    }
  }
]
