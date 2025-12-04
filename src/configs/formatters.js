import { interopDefault, isPackageInScope, parserPlain } from '../utils'
import { stylisticConfigDefaults } from './stylistic'

import { GLOB_CSS, GLOB_PHP, GLOB_GRAPHQL, GLOB_HTML, GLOB_POSTCSS, GLOB_SCSS, GLOB_SVG, GLOB_XML } from '../globs'

function mergePrettierOptions(
  options,
  overrides = {},
) {
  return {
    ...options,
    ...overrides,
    plugins: [
      ...(overrides.plugins || []),
      ...(options.plugins || []),
    ],
  }
}

export async function formatters(options = {}) {
  const isPrettierPluginXmlScope = isPackageInScope('@prettier/plugin-xml')
  const isPrettierPluginPhpScope = isPackageInScope('@prettier/plugin-php')

  const {
    config = {},
    css = true,
    html = true,
    graphql = true,
    svg = isPrettierPluginXmlScope,
    xml = isPrettierPluginXmlScope,
    php = isPrettierPluginPhpScope,
  } = options

  const pluginFormat = await interopDefault(import('eslint-plugin-format'))

  const {
    indent,
    quotes,
    semi,
  } = {
    ...stylisticConfigDefaults
  }

  const prettierOptions = Object.assign({
    endOfLine: 'auto',
    printWidth: 120,
    semi,
    singleQuote: quotes === 'single',
    tabWidth: typeof indent === 'number' ? indent : 2,
    trailingComma: 'all',
    useTabs: indent === 'tab',
  },
    config || {}
  )

  const prettierXmlOptions = {
    bracketSameLine: true,
    singleAttributePerLine: false,
    tabWidth: 80,
    xmlQuoteAttributes: 'double',
    xmlSelfClosingSpace: true,
    xmlSortAttributesByKey: false,
    xmlWhitespaceSensitivity: 'ignore',
  }

  const prettierPhpOptions = {
    phpVersion: "auto",
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,
    trailingCommaPHP: true,
    braceStyle:"per-cs",
    requirePragma: false,
    insertPragma: false,
  }

  const configs = [
    {
      name: 'cuiqg/formatter/setup',
      plugins: {
        format: pluginFormat
      }
    }
  ]

  if (css) {
    configs.push({
      name: 'cuiqg/formatter/css',
      files: [GLOB_CSS, GLOB_POSTCSS],
      plugins: {
        format: parserPlain
      },
      rules: {
        'format/prettier': ['error', mergePrettierOptions(prettierOptions, {
          parser: 'css'
        })]
      }
    },
    {
      files: [GLOB_SCSS],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'cuiqg/formatter/scss',
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(prettierOptions, {
            parser: 'scss',
          }),
        ],
      },
    })
  }

  if (html) {
    configs.push({
      files: [GLOB_HTML],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'cuiqg/formatter/html',
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(prettierOptions, {
            parser: 'html',
          }),
        ],
      },
    })
  }

  if (xml) {
    configs.push({
      files: [GLOB_XML],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'cuiqg/formatter/xml',
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions({ ...prettierXmlOptions, ...prettierOptions }, {
            parser: 'xml',
            plugins: [
              '@prettier/plugin-xml',
            ],
          }),
        ],
      },
    })
  }

  if (svg) {
    configs.push({
      files: [GLOB_SVG],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'cuiqg/formatter/svg',
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions({ ...prettierXmlOptions, ...prettierOptions }, {
            parser: 'xml',
            plugins: [
              '@prettier/plugin-xml',
            ],
          }),
        ],
      },
    })
  }

  if (graphql) {
    configs.push({
      files: [GLOB_GRAPHQL],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'cuiqg/formatter/graphql',
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions(prettierOptions, {
            parser: 'graphql',
          }),
        ],
      },
    })
  }

  if (php) {
    configs.push({
      files: [GLOB_PHP],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'cuiqg/formatter/php',
      rules: {
        'format/prettier': [
          'error',
          mergePrettierOptions({ ...prettierPhpOptions, ...prettierOptions}, {
            parser: 'php',
            plugins: [
              '@prettier/plugin-php',
            ],
          }),
        ],
      },
    })
  }

  return configs
}
