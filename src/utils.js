export async function interopDefault(module) {
  const resolved = await module
  return resolved.default || resolved
}
