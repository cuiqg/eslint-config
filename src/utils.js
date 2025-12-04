import { fileURLToPath } from 'node:url'
import { isPackageExists } from 'local-pkg'

const scopeUrl = fileURLToPath(new URL('.', import.meta.url))

export const parserPlain = {
  meta: {
    name: 'parser-plain',
  },
  parseForESLint: (code) => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: 'Program',
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: [],
    },
  }),
}

export async function interopDefault(
  module
) {
  try {
    let resolved = await module
    return resolved?.default || resolved
  }
  catch (error) {
    throw new Error(`Cannot import module: ${String(error)}`)
  }
}

export function isPackageInScope(name) {
  return isPackageExists(name, { paths: [scopeUrl] })
}

export function renameRules(rules, map) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) {
          return [to + key.slice(from.length), value]
        }
      }
      return [key, value]
    })
  )
}
