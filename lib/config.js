var path = require('path')

var pkg = {}

try {
  pkg = require(path.resolve(process.cwd(), 'package.json'))
} catch (err) {}

var config = Object.assign({
  browsers: ['ie > 9', 'last 2 versions'],
  out: './theme',
  config: './runner-variables.scss',
  theme: 'runner-theme-chalk',
  minimize: false
}, pkg['runner-theme'])

exports.themePath = path.resolve(process.cwd(), './node_modules/' + config.theme)
exports.out = config.out
exports.config = config.config
exports.minimize = config.minimize
exports.browsers = config.browsers
exports.components = config.components
exports.themeName = config.theme
