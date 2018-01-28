module.exports = {
  resolve: {
    extensions: ['.cssmodule']
  },
  module: {
    rules: [
      {
        test: /\.cssmodule$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
}
