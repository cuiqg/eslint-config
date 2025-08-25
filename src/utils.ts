import type { Awaitable } from './types'

export const parserPlain = {
  meta: {
    name: 'parser-plain',
  },
  parseForESLint: (code: string) => ({
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

export async function interopDefault<T>(
  module: Awaitable<T>,
): Promise<T extends { default: infer U } ? U : T> {
  try {
    let resolved = await module
    return (resolved as any).default || resolved
  } catch (error) {
    throw new Error(`Cannot import module: ${String(error)}`)
  }
}

export function renameRules(
  rules: Record<string, any>,
  map: Record<string, string>,
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) {
          return [to + key.slice(from.length), value]
        }
      }
      return [key, value]
    }),
  )
}
