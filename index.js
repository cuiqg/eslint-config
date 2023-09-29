module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },
  extends: [
    "eslint:recommended",
    'plugin:vue/vue3-recommended'
  ],
  ignorePatterns: [
    "node_modules/",
    "**/node_modules/",
    "/**/node_modules/*",
    "dist/",
    "build/"
  ],
  "reportUnusedDisableDirectives": true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off'
      }
    }
  ],
  rules: {
    "no-undef": "off",
    "no-unused-vars": [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    "object-curly-spacing": ["error", "always"],
    "vue/no-v-html": "off",
    "vue/valid-v-for": "off",
    "vue/require-v-for-key": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/require-prop-types": "off",
    "vue/component-tags-order": ["error", {
      "order": [["template", "script"], "style"]
    }],
    "vue/no-unused-vars": ["error", {
      "ignorePattern": "^_"
    }],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}
