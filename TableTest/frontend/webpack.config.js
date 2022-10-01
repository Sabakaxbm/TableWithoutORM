const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,

  devServer: {
    static: {
      directory: path.join(__dirname, './src/index.tsx'),
    },
    hot: true,
    open: true,
    compress: true,
    port: 9000,
  },
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  // entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: './js/[name][hash].bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name][hash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      // JavaScript
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: ["babel-loader"],
      //   },
      // img
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      //   css
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },

      {
        test: /\.(sass|scss|css)$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
