/**
 * 已经废弃
* @Date:   2016-09-29T09:01:07+08:00
* @Last modified time: 2016-09-29T10:25:04+08:00
*/

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var index_file = path.resolve(__dirname, 'src/index.html');
fs.readFile(index_file, 'utf-8', function(err, data) {
    if (err) {
        console.log('error: ', err);
    } else {
        var devhtml = data;
        if (data.indexOf('/bundle.js') < 0) {
            devhtml = devhtml.replace('<script></script>', '<script></script><script type="text/javascript" src="/bundle.js"></script>');
        }
        fs.writeFileSync(index_file, devhtml);
    }
});

var static_url = 'assets/';
module.exports = {
    debug: true,
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './src',
        lazy: false,
        stats: { colors: true, cached: false, cachedAssets: false },
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {

        loaders: [{
                test: /\.vue$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'vue'
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'style!css!postcss'
            },{
                test: /\.sass$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'style!css!sass!postcss?indentedSyntax'
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'style!css!sass!postcss'
            }, {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.json$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'json'
            }, {
                test: /\.json$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'json'
            }, {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name: static_url + 'img/[name].[hash:7].[ext]?[hash]'
                }
            }, {
                test: /\.(html|tpl)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'html'
            }
            /*        {
                        test: /\.(png|jpg|gif|svg)$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: 'url',
                        query: {
                            limit: 1,
                            name: '[name].[ext]?[hash]'
                        }
                    }, {
                        test: /\.(html|tpl)$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: 'html'
                    }, {
                        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: 'url-loader?limit=10000&minetype=srclication/font-woff'
                    }, {
                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: 'url',
                        query: {
                            name: '[name].[ext]?mimetype=srclication/font-woff2'
                        }
                    }, {
                        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: 'url',
                        query: {
                            name: '[name].[ext]?mimetype=srclication/font-woff2'
                        }
                    }*/
        ]
    },
    externals: {
    },
    vue: {
        loaders: {
            css: 'vue-style!css!sass!postcss?sourceMap',
            sass: 'vue-style!css!sass!postcss?indentedSyntax?sourceMap',
            scss: 'vue-style!css!sass!postcss?sourceMap',
            js: 'babel',
            html: 'vue-html'
        }
    },
    postcss: [
        precss,
        autoprefixer({
            flexbox: true,
            browsers: ['> 0.001%','iOS 7'],
            cascade: false,
            supports: true
        })
    ],
    resolve: {
        // root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        extensions: ['', '.js', '.vue', '.jsx', '.scss', '.css'],
        alias: {}
    },
    plugins: [
        /*    new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),*/
        new webpack.HotModuleReplacementPlugin(),
        function() {
            return this.plugin('done', function(stats) {
                var content;
                content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
                console.log('版本是：' + JSON.stringify(stats.toJson().hash));
            });
        },
    ],
    devtool: '#eval-source-map'
};
