/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    var shouldMinify = (grunt.option('maps') || !grunt.option('dev'));

    // Help Grunt find the right plugins at runtime
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.config.merge({
        // Copies static files for non-optimized builds
        copy: {
            buildScripts: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    dest: shouldMinify ? '<%= env.DIR_TMP %>' : '<%= env.DIR_DEST %>',
                    src: 'assets/{scripts,vendor}/**/*.js'
                }]
            },
            copyLoader: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_TMP %>',
                    dest: '<%= env.DIR_DEST %>',
                    src: ['assets/scripts/config.js', 'assets/vendor/requirejs/require.js']
                }]
            }
        },

        // Babel is a JavaScript compiler which allows
        // you to use next generation JavaScript today
        babel: {
            buildScripts: {
                options: {
                    sourceMap: shouldMinify ? false : true,
                    compact: shouldMinify ? true : false
                },
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    dest: shouldMinify ? '<%= env.DIR_TMP %>' : '<%= env.DIR_DEST %>',
                    src: ['assets/scripts/**/*.js', '!assets/scripts/config.js']
                }]
            }
        },

        // RequireJS plugin that will use uglify2 to build and minify our
        // JavaScript, templates and any other data we include in the require
        // files.
        requirejs: {
            options: {
                // Path of source scripts, relative to this build file
                baseUrl:
                    shouldMinify ? '<%= env.DIR_TMP %>/assets/scripts' : '<%= env.DIR_DEST %>/assets/scripts',

                // Path of shared configuration file
                mainConfigFile:
                    shouldMinify
                        ? ['<%= env.DIR_TMP %>/assets/scripts/config.js']
                        : ['<%= env.DIR_DEST %>/assets/scripts/config.js'],

                // Whether to generate source maps for easier debugging of
                // concatenated and minified code in the browser.
                generateSourceMaps: grunt.option('maps'),

                // Whether to preserve comments with a license. Not needed when,
                // and oddly incompatible with, generating a source map.
                preserveLicenseComments: grunt.option('no-maps'),

                // Allow `'use strict';` be included in the RequireJS files
                useStrict: true,

                // Comments that start with //>> are build pragmas. Exmaple:
                //
                //     //>>includeStart("isDev", pragmas.isDev);
                //     ... debugging code here ...
                //     //>>includeEnd("isDev");
                //
                pragmas: {
                    isProd: grunt.option('prod'),
                    isDev: grunt.option('dev')
                },

                // Whether and how to optimize
                optimize: shouldMinify ? 'uglify2' : 'none',

                // Minification options
                uglify2: {
                    output: {
                        beautify: false,
                        comments: false
                    },
                    compress: {
                        sequences: false,
                        global_defs: { // jshint ignore:line
                            DEBUG: false
                        }
                    },
                    warnings: false,
                    mangle: true
                }
            },
            buildScripts: {
                options: {
                    // Name of input script (.js extension inferred)
                    name: 'main',

                    // Destination path of final output
                    out: '<%= env.DIR_DEST %>/assets/scripts/main.js'
                }
            }
        },

        // Searches for build comment blocks (`<!-- build:js -->`) and generates
        // the appropriate `concat` and `uglify` configuration.
        useminPrepare: {
            options: {
                root: '<%= env.DIR_SRC %>',
                staging: '<%= env.DIR_TMP %>',
                dest: '<%= env.DIR_DEST %>',
                flow: {
                    buildScripts: {
                        // Force js only
                        steps: { js: ['concat', 'uglifyjs'], css: [] },
                        post: {}
                    }
                }
            },
            buildScripts: ['<%= env.DIR_SRC %>/**/*.html']
        }
    });

    grunt.registerTask('buildScripts',
        shouldMinify
            ? [
                'copy:buildScripts',
                'copy:copyLoader',
                'babel:buildScripts',
                'requirejs:buildScripts',
                'useminPrepare:buildScripts',
                'concat:generated',
                'uglify:generated'
            ]
            : [
                'copy:buildScripts',
                'babel:buildScripts'
            ]
    );
};
