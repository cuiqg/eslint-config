import { defineConfig } from 'tsup'

/** @type {import('tsup').Options} */
export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  shims: true,
})
