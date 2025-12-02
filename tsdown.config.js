import { defineConfig } from 'tsdown'
import { spawn } from 'node:child_process'
import process from 'node:process'
export default defineConfig({
  entry: 'src/index.js',
  clean: true,
  shims: true,
  format: ['esm'],
  exports: true,
  hooks(hooks) {
    hooks.hook('build:done', () => {
      console.log(process.env.NODE_ENV)
      // 运行 eslint-config-inspector
      spawn('npx', ['eslint-config-inspector', '--open', 'false', '--config', 'eslint-inspector.config.js'], {
        stdio: 'inherit',
        shell: true
      })
    })
  }
})
