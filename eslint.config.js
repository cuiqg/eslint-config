import cuiqg from './dist/index.js'

export default cuiqg([
  {
    files: ['src/**/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
])
