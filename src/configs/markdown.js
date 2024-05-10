import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

/** @returns {import('eslint-define-config').FlatESLintConfigItem[]} */
export async function markdown() {
  const markdown = await interopDefault(import('eslint-plugin-markdown'))

  return [
    {
      plugins: {
        markdown,
      },
    },
    {
      files: [GLOB_MARKDOWN],
      processor: 'markdown/markdown',
    },
    {
      files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',

        'node/prefer-global/buffer': 'off',
        'node/prefer-global/process': 'off',

        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
  ]
}
