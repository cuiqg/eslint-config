import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.js',
  clean: true,
  shims: true,
  format: ['esm'],
  exports: true
})
