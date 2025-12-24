import { fileURLToPath } from 'node:url'
import { isPackageExists } from 'local-pkg'

const scopeUrl = fileURLToPath(new URL('.', import.meta.url))

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
