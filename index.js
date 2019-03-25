const babelTransformer = require('metro-babel-transformer')

module.exports.transform = function(src, filename, options) {
  if (typeof src === 'object') {
    ;({ src, filename, options } = src)
  }

  if (filename.endsWith('.html')) {
    return babelTransformer.transform({
      src: `module.exports = \`${src}\`;`,
      filename,
      options,
    })
  }
  return babelTransformer.transform({ src, filename, options })
}
