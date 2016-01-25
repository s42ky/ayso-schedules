/* global module, require */
var path = require('path');

module.exports = function (config) {
    "use strict";

    var testWebpackConfig = require('./webpack.test.config.js');


    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // Files to test. Generated by webpack, so only single item here
        files: [ { pattern: 'karma-webpack.js', watched: false } ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'karma-webpack.js': ['webpack', 'sourcemap']
        },

        coverageReporter: {
            dir: 'build/coverage',
            reporters: [
                { type: 'html' },
                { type: 'text-summary' }
            ]
        },

        // test results reporter to use
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'kjhtml'],


        webpack: testWebpackConfig,

        webpackServer: { noInfo: true, quiet: true, progress: false, stats: false },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    });
};
