const inspect = require('util').inspect;
const webpackRenderer = require('electron-webpack/webpack.renderer.config.js');

module.exports = env => {
  return new Promise((resolve, reject) => {

    /* get provided config */
    webpackRenderer(env).then(rendererConfig => {
      console.log("@inspect(rendererConfig, {depth:null})", inspect(rendererConfig, {depth:null}));
      /* add `raw-loader` */
      rendererConfig.module.rules.push({
        test: /\.txt$/,
        use: 'raw-loader'
      })

      /* return modified config to webpack */
      resolve(rendererConfig)
    });
  });
}
