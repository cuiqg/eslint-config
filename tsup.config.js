import { defineConfig } from 'tsup'

/** @type {import('tsup').Options} */
export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  shims: true,
  clean: true
})
