export async function interopDefault(m) {
  const resolved = await m
  return resolved.default || resolved
}

export async function combine(...configs) {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}
