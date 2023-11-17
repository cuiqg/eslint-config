/**
 *
 */
export function combine(...configs) {
  return configs.flat()
}

/**
 *
 */
export function renameRules(rules, from, to) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from))
          return [to + key.slice(from.length), value]

        return [key, value]
      }),
  )
}

/**
 *
 */
export function toArray(value) {
  return Array.isArray(value) ? value : [value]
}
