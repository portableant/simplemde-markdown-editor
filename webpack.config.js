const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
    {   
        name: 'dev',
        mode: 'development',
        entry: {
            'simplemde': [
                path.resolve(__dirname, './src/js/simplemde.js'),
                path.resolve(__dirname, './node_modules/codemirror/lib/codemirror.css'),
                path.resolve(__dirname, './src/css/simplemde.css'),
                path.resolve(__dirname, './node_modules/codemirror-spell-checker/src/css/spell-checker.css')
            ]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        }
    },
    {   
        name: 'prod',
        mode: 'production',
        entry: {
            'simplemde': [
                path.resolve(__dirname, './src/js/simplemde.js'),
                path.resolve(__dirname, './node_modules/codemirror/lib/codemirror.css'),
                path.resolve(__dirname, './src/css/simplemde.css'),
                path.resolve(__dirname, './node_modules/codemirror-spell-checker/src/css/spell-checker.css')
            ]
        },
        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].min.css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        }
    }
];
