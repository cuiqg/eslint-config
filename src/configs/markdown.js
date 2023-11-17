import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE } from '../globs'
import { pluginMarkdown } from '../plugins'

/**
 *
 */
export function markdown(options = {}) {
  const {
    componentExts = [],
    overrides = {},
  } = options

  return [
    {
      name: 'tsuiqg:markdown:setup',
      plugins: {
        markdown: pluginMarkdown,
      },
    },
    {
      files: [GLOB_MARKDOWN],
      name: 'tsuiqg:markdown:processor',
      processor: 'markdown/markdown',
    },
    {
      files: [
        GLOB_MARKDOWN_CODE,
        ...componentExts.map(ext => `${GLOB_MARKDOWN}/**/*.${ext}`),
      ],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      name: 'tsuiqg:markdown:rules',
      rules: {
        'import/newline-after-import': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-restricted-syntax': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'off',
        'no-unused-vars': 'off',
        'style/comma-dangle': 'off',
        'style/eol-last': 'off',
        'unicode-bom': 'off',

        ...overrides,
      },
    },
  ]
}
