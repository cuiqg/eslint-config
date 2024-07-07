import process from 'node:process'
import { isPackageExists } from 'local-pkg'
export function toArray(value) {
  return Array.isArray(value) ? value : [value]
}

export async function interopDefault(m) {
  const resolved = await m
  return resolved.default || m
}

/**
 * Combine array and non-array configs into a signle array
 */
export async function combine(...configs) {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}

export async function ensurePackages(packages) {
  if (process.env.CI || process.stdout.isTTY === false) return

  const nonExistingPackages = packages.filter(i => i && !isPackageExists(i))
  if (nonExistingPackages.length === 0) return

  const p = await import('@clack/prompts')
  const result = await p.confirm({
    message: `${nonExistingPackages.length === 1 ? 'Package is' : 'Packages are'} required for this config: ${nonExistingPackages.join(', ')}. Do you want to install them?`
  })

  if (result) {
    await import('@antfu/install-pkg').then(i =>
      i.installPackage(nonExistingPackages, { dev: true })
    )
  }
}

export function resolveSubOptions(options, key) {
  return typeof options[key] === 'boolean' ? {} : options[key] || {}
}

export function getOverrides(options, key) {
  const sub = resolveSubOptions(options, key)
  return {
    ...options.overrides?.[key],
    ...('overrides' in sub ? sub.overrides : {})
  }
}
