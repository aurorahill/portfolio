const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    projects: './src/projects/projects-page.js',
    about: './src/about/about-page.js',
    contact: './src/contact/contact-page.js',
    notFound: './src/not-found/not-found.js',
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
    assetModuleFilename: 'images/[name][contenthash:6].[ext]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    open: true,
    static: path.resolve(__dirname, '../', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css|scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jpg|png|svg|gif|jpeg$/,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '2.0.0' }],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      title: 'Projects',
      template: 'src/projects/index.html',
      filename: 'projects/index.html',
      chunks: ['projects'],
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: 'src/about/index.html',
      filename: 'about/index.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      title: 'Contact',
      template: 'src/contact/index.html',
      filename: 'contact/index.html',
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      title: 'Not Found',
      template: 'src/not-found/index.html',
      filename: 'not-found/index.html',
      chunks: ['notFound'],
    }),
  ],
};

module.exports = settings;
