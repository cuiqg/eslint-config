import globals from 'globals'
import pluginJS from '@eslint/js'

import { isInEditor } from '../env'
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { pluginUnusedImports } from '../plugins'

export const javascriptRules = {
  ...pluginJS.configs.recommended.rules,

  'accessor-pairs': [
    'error',
    { enforceForClassMembers: true, setWithoutGet: true },
  ],
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  curly: ['error', 'all'],
  'default-case-last': 'error',
  'default-param-last': 'off',
  eqeqeq: ['error', 'smart'],
  'grouped-accessor-pairs': 'error',
  'logical-assignment-operators': 'error',
  'new-cap': 'off',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-caller': 'error',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-else-return': ['error', { allowElseIf: true }],
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': [
    'error',
    { allowEmptyCase: true, commentPattern: 'break[\\s\\w]*omitted' },
  ],
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-symbol': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-redeclare': ['error', { builtinGlobals: false }],
  'no-restricted-globals': [
    'error',
    { message: 'Use `globalThis` instead.', name: 'global' },
    { message: 'Use `globalThis` instead.', name: 'self' },
  ],
  'no-restricted-properties': [
    'error',
    {
      message:
        'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
      property: '__proto__',
    },
    {
      message: 'Use `Object.defineProperty` instead.',
      property: '__defineGetter__',
    },
    {
      message: 'Use `Object.defineProperty` instead.',
      property: '__defineSetter__',
    },
    {
      message: 'Use `Object.getOwnPropertyDescriptor` instead.',
      property: '__lookupGetter__',
    },
    {
      message: 'Use `Object.getOwnPropertyDescriptor` instead.',
      property: '__lookupSetter__',
    },
  ],
  'no-restricted-syntax': [
    'error',
    'DebuggerStatement',
    'LabeledStatement',
    'WithStatement',
    'TSEnumDeclaration[const=true]',
    'TSExportAssignment',
  ],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable-loop': 'error',
  'no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
  ],
  'no-unused-private-class-members': 'error',
  'no-unused-vars': [
    'error',
    {
      args: 'none',
      caughtErrors: 'none',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  'no-use-before-define': [
    'error',
    { classes: false, functions: false, variables: true },
  ],
  'no-useless-call': 'error',
  'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'object-shorthand': ['error', 'properties', { avoidQuotes: true }],
  'one-var': ['error', { initialized: 'never' }],
  'operator-assignment': 'error',
  'prefer-arrow-callback': [
    'error',
    { allowNamedFunctions: false, allowUnboundThis: true },
  ],
  'prefer-const': [
    'error',
    { destructuring: 'all', ignoreReadBeforeAssign: true },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'sort-imports': [
    'error',
    {
      allowSeparatedGroups: false,
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
  'symbol-description': 'error',
  'unicode-bom': 'error',
  'vars-on-top': 'error',
  yoda: 'error',
}

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export function javascript() {
  return [
    {
      files: [GLOB_SRC],
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        'unused-imports': pluginUnusedImports,
      },
      rules: {
        ...javascriptRules,

        'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: [`**/*.{test,spec}.${GLOB_SRC_EXT}`],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ]
}
