const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = (env, agrv) => {
  const isAnalyze = env && env.analyze;
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
      filename: 'static/css/[name].[contenthash:6].css',
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      test: /\.(css|js|html|svg)$/,
    }),
  ];
  if (isAnalyze) {
    basePlugins = [...basePlugins, new BundleAnalyzerPlugin()];
  }

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
              options: { sourceMap: false },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false },
            },
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[ext]',
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
                name: 'static/media/[name].[contenthash:6].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
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
    plugins: basePlugins,
    performance: {
      maxEntrypointSize: 800000,
    },
  };
};
