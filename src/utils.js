export async function combine(...configs) {
  return Promise.all(configs).then(configs => configs.flat())
}

export function renameRule(key, from, to) {
  return key.startsWith(from) ? to + key.slice(from.length) : key
}

export function renameRules(rules, from, to) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [
      renameRule(key, from, to),
      value,
    ])
  )
}

export function toArray(input) {
  return Array.isArray(input) ? input : [input]
}
