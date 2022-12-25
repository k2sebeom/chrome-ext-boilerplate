const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    content_scripts: ["./src/js/content_script.js"]
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: '[name].js',
    publicPath: '',
    clean: true
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/manifest.json' },
        { from: 'images/*', to: path.resolve(__dirname, "../build"), context: './src/' }
      ]
    })
  ]
  // module: {
  //   rules: [

  //   ]
  // }
};