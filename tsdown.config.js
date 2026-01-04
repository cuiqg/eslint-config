import { defineConfig } from 'tsdown'
import { spawn } from 'node:child_process'

let inspectorProcess = null

export default defineConfig({
  entry: "src/index.js",
  exports: true,
  hooks: {
    'build:done': async (args) => {
      if (args.options?.watch && !inspectorProcess) {
        inspectorProcess = spawn('pnpx', ['@eslint/config-inspector', '--open', 'false', '--config', 'eslint-inspector.config.js'], {
          stdio: 'inherit',
          shell: true
        })

        inspectorProcess.on('exit', () => {
          inspectorProcess = null
        })
      }
    }
  }
})
