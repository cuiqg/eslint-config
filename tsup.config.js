import process from 'node:process'
import { defineConfig } from 'tsup'

/** @type {import('tsup').Options} */
export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  shims: true,
  minify: process.env.NODE_ENV === 'production',
})
