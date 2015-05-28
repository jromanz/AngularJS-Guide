// Karma configuration
// Generated on Sun May 24 2015 07:48:36 GMT-0500 (Hora est. Pacífico, Sudamérica)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "public_html/js/libs/angular.min.js",
        "public_html/js/libs/angular-mocks.js",
        "public_html/js/libs/angular-route.min.js",
        "public_html/js/libs/angular-cookies.min.js",
        "public_html/js/libs/angular-resource.min.js",
        "public_html/partials/*.html",
        "public_html/js/*.js",
        "test/**/*Spec.js",
    ],

    ngHtml2JsPreprocessor: {
        stripPrefix: 'public_html/'
    }
    
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'public_html/partials/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome',"Firefox"],

    plugins: [
        "karma-junit-reporter",
        "karma-chrome-launcher",
        "karma-firefox-launcher",
        "karma-jasmine",
        "karma-ng-html2js-preprocessor"
    ]

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
