import cuiqg from './dist/index.js'

export default cuiqg({
  ignores: ['dist'],
}, {
  files: ['src/**/*.js'],
  rules: {
    'import/no-default-export': 'off',
    'jsdoc/require-returns-description': 'off',
  },
})
