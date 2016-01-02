// Karma configuration
// Generated on Fri Oct 30 2015 19:47:19 GMT-0700 (Pacific Daylight Time)

module.exports = function (config) {
    "use strict";

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            //Setup Karma
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.js', included: true, watched: true},
            {pattern: 'karma-test-shim.js', included: true, watched: true},

            //Project libs
            ////Setup
            //'build/cordova.js',
            //'build/_bower.dev.js',
            //'build/_local.dev.js'

            //Project files TODO: Redirect to build/
            {pattern: 'build/ts2js/**/*.js', included: true, false: true},
            {pattern: 'karma-test-shim.js', included: false, watched: true},
            {pattern: 'src/**/*.html', included: false, watched: true},
            {pattern: 'src/**/*.css', included: false, watched: true},

            //Maps for dev linking
            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: 'src/**/*.js.map', included: false, watched: false}
        ],


        // list of files to exclude
        exclude: [ '*.dev.js' ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'build/_local.dev.js': ['coverage']
        },


        // test results reporter to use
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'build/coverage'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        loggers: [
            {
                "type": "file",
                "filename": "testrun.log",
                "maxLogSize": 20480,
                "backups": 3,
                "category": "relative-logger"
            },
            {
                "type": "console"
            }
        ],


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    });
};
