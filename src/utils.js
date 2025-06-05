export async function interopDefault(m) {
  const resolved = await m
  return resolved.default || m
}

export function renameRules(rules, map) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for(const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) {
          return [to + key.slice(from.length), value]
        }
      }
      return [key, value]
    })
  )
}
