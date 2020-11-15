const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const basePlugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '**/*',
          globOptions: {
            ignore: ['index.html'],
          },
          to: '',
          context: path.resolve('public'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.ProgressPlugin(),
  ];

  return {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader', 'eslint-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve('src'),
        '@@': path.resolve(),
        '@Models': path.resolve('src/models'),
        '@Components': path.resolve('src/components'),
        '@Constants': path.resolve('src/constants'),
        '@Contexts': path.resolve('src/contexts'),
        '@Helper': path.resolve('src/helpers'),
        '@Hooks': path.resolve('src/hooks'),
        '@Pages': path.resolve('src/pages'),
        '@Layout': path.resolve('src/layouts'),
        '@Routes': path.resolve('src/routes'),
      },
    },
    output: {
      path: path.resolve('../build'),
      publicPath: '/',
      filename: 'static/js/main.[contenthash:6].js',
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false,
      },
    },
    devtool: 'source-map',
    devServer: {
      contentBase: 'public',
      port: 3000,
      hot: true,
      watchContentBase: true,
      historyApiFallback: true,
    },
    plugins: basePlugins,
    performance: {
      maxEntrypointSize: 800000,
    },
  };
};
