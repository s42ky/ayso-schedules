/* global require, process, __dirname */

var path = require('path');
// Webpack Plugins
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin  = require('webpack/lib/DefinePlugin');
var webpack = require('webpack');
var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

// Helper functions

function root(args) {
    "use strict";
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}


/*
 * Config
 */
module.exports = {
    resolve: {
        cache: false,
        extensions: ['','.ts','.js','.json','.css','.html']
    },
    module: {
        loaders: [
            //{ test: /^karma-webpack\.js$/, loader: 'exports?ngTestInit=testing' },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    // remove TypeScript helpers to be injected below by DefinePlugin
                    'compilerOptions': {
                        'removeComments': true,
                        'noEmitHelpers': true
                    }
                },
                exclude: [ /\.e2e\.ts$/, /node_modules/ ]
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/,  loader: 'raw-loader' }
        ],
        postLoaders: [
            // instrument only testing sources with Istanbul
            {
                test: /\.(js|ts)$/,
                include: root('src'),
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /\.e2e\.ts$/,
                    /node_modules/
                ]
            }
        ],
        noParse: [
            /zone\.js\/dist\/.+/,
            /angular2\/bundles\/.+/
        ]
    },
    stats: { colors: true, reasons: true },
    devtool: 'inline-sourcemap',
    debug: false,
    plugins: [
        new DefinePlugin({
            // Environment helpers
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new ProvidePlugin({
            '__metadata': 'ts-helper/metadata',
            '__decorate': 'ts-helper/decorate',
            '__awaiter': 'ts-helper/awaiter',
            '__extends': 'ts-helper/extends',
            '__param': 'ts-helper/param',
            'Reflect': 'es7-reflect-metadata/dist/browser',

            '__phantomjs': 'phantomjs-polyfill',
            '__es6promise': 'es6-promise',
            '__es6shim': 'es6-shim',
//
'__zoneMicro': 'zone.js/lib/browser/zone-microtask.js',
'__zoneStack': 'zone.js/lib/browser/long-stack-trace-zone.js',
            '__zoneJasmine': 'zone.js/dist/jasmine-patch.js',
            'ng2testing':'angular2/testing',
            'ng2browser': 'angular2/platform/testing/browser'
        }),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' },
            { from: 'test/data-2016-02-08.json', to: 'data.json' }
        ])
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: 'commons',
        //    filename: 'karma-webpack.js',
        //    minChunks: Infinity
        //})
    ],
    // we need this due to problems with es6-shim
    node: {
        global: 'window',
        progress: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};

