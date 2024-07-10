import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const parserPlain = {
  meta: {
    name: 'parser-plain'
  },
  parseForESLint: code => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: 'Program'
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: []
    }
  })
}
export function toArray(value) {
  return Array.isArray(value) ? value : [value]
}

export async function interopDefault(m) {
  const resolved = await m
  return resolved.default || m
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
