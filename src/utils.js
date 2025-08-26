export async function interopDefault(
  module,
) {
  try {
    let resolved = await module
    return resolved?.default || resolved
  } catch (error) {
    throw new Error(`Cannot import module: ${String(error)}`)
  }
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
    }),
  )
}
