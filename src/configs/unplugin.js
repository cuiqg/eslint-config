import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { loadConfig } from 'unconfig'

/**
 * UnPlugin
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export async function autoImport() {
  const resolved = resolve(process.cwd(), `./.eslintrc-auto-import.json`)

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
    return [
      {
        name: 'cuiqg/unplugin/auto-import',
        languageOptions: {
          globals: {
            ...config
          }
        }
      }
    ]
  }
  else {
    return [

    ]
  }
}
