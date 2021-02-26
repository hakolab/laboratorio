const path = require('path');

module.exports = (env) => {

  console.log(env.platform || 'firebase')

  return {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/'),
      //publicPath: '/stamp/'
    }, 
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      /* historyApiFallback: {
        index: 'index_dev.html'
      }, */
      historyApiFallback: true,
      //openPage: 'stamp/'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [ 
                "@babel/plugin-proposal-class-properties" 
              ] 
            }
          }
          },
          {
            test: /\.css$/,
            use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'}
            ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: {
            loader: 'url-loader',
          }
        }
      ],
    },
  }
};