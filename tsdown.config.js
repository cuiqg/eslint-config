import { defineConfig } from 'tsdown'
import { spawn } from 'node:child_process'
export default defineConfig({
  entry: 'src/index.js',
  clean: true,
  shims: true,
  format: ['esm'],
  exports: true,
  hooks: {
    'build:done': async (args) => {
      if (args.options?.watch) {
        spawn('pnpx', ['@eslint/config-inspector', '--open', 'false', '--config', 'eslint-inspector.config.js'], {
          stdio: 'inherit',
          shell: true
        })
      }
    }
  }
})
