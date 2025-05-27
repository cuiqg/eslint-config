import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { loadConfig } from 'unconfig'

/**
 * UnPlugin
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export const unplugin = async () => {
  const resolved = resolve(process.cwd(), `./.eslintrc-auto-import.json`)
  const globals = {}

  if (fs.existsSync(resolved) && fs.statSync(resolved).isFile) {
    const cwd = dirname(resolved)

    const { config } = await loadConfig({
      sources: [
        {
          files: resolved,
          extensions: [],
          rewrite(config) {
            return config?.globals
          }
        }
      ],
      cwd
    })

    globals = {
      ...config
    }
  }

  return [
    {
      name: 'cuiqg/unplugin/auto-import',
      languageOptions: {
        globals
      }
    }
  ]

}
