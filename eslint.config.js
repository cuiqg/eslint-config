import { cuiqg } from './dist/index.js'

export default cuiqg({
  vue: true,
  unocss: true,
  prettier: true,
  javascript: {
    overrides: {
      'no-undef': 'off'
    }
  }
})
