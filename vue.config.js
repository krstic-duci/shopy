module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: true
      }
    }
  },
  lintOnSave: false,
  css: {
    modules: true
  }
}
