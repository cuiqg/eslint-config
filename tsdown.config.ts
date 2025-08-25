import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  clean: true,
  shims: true,
  format: ['esm'],
  publint: true,
})
