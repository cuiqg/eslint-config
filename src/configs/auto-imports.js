import path from 'node:path'
import fs from 'node:fs'

export async function autoImports(options = {}) {

  const {
    cwd = process.cwd(),
    filename = '.eslintrc-auto-import.json',
    strict = true
  } = options

  const config = []

  if (fs.existsSync(path.join(cwd, filename))) {
    try {
      config.push({
        name: 'cuiqg/auto-imports',
        languageOptions: {
          ...(JSON.parse(fs.readFileSync(path.join(cwd, filename), 'utf8')))
        }
      })
    } catch (error) {
      if (strict) {
        throw error
      }
    }
  }

  return config
}
