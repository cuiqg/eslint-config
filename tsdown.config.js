import { defineConfig } from 'tsdown/config'

/** @type {import('tsdown').UserConfig} */
export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm'],
  dts: false,
  shims: true,
  clean: true
})
