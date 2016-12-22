const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'YOUTUBEAPI': JSON.stringify(process.env.YOUTUBEAPI)
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}



// const webpack = require('webpack');

// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel',
//       query: {
//         presets: ['react', 'es2015', 'stage-1']
//       }
//     }]
//   },
//   //This section allows react to access env variables
//   plugins:[
//      new webpack.DefinePlugin({
//       'process.env':{
//         'YOUTUBEAPI': JSON.stringify(process.env.YOUTUBEAPI)
//       }
//     })
//   ],
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };
