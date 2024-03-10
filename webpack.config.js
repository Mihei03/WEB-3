const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//1 способ, который облегчит жизнь в разы с фотографиями
//const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/scripts/all.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'Swipe.js',
    },

    plugins: [
    //1 способ, который облегчит жизнь в разы с фотографиями
    //    new CopyPlugin({
    //        patterns: [
    //            { from: 'src/Resources', to: 'Resources' },
    //            { from: 'src/styles', to: 'styles' }
    //       ],
    //    }),
           new HtmlWebpackPlugin({
               title: 'Webpack Boilerplate',
               template: path.resolve(__dirname, './src/html/Swiper.html'),
               filename: 'Swipe.html',
           }),
    ],

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|ico)$/i,
                type: 'asset/resource',
                //2 способ, который меня чуть не убил...
                generator: {
                    filename: 'Resources/[name][ext][query]'
                  }
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    
    devServer: {
        historyApiFallback: {
            index: 'Swipe.html'
        },
        static: {
            directory: path.join(__dirname, 'dist'), // путь до папки сборки
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

}