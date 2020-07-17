const path = require('path')

module.exports = {
  publicPath: '/dist/',
  css: {
    extra: false
  },
  outputDir: path.resolve(__dirname, '../dist')
}
