module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        /**
         * This will load in our package.json file so we can have access
         * to the project name and version number.
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Constants for the Gruntfile so we can easily change the path for our environments.
         */
        BASE_PATH: '',
        DEVELOPMENT_PATH: 'js/',
        EXAMPLES_PATH: 'examples/',
        PRODUCTION_PATH: 'web/',

        /**
         * A code block that will be added to our minified code files.
         * Gets the name and version and other info from the above loaded 'package.json' file.
         * @example <%= banner.join("\\n") %>
         */
        banner: [
            '/*',
            '* Project: <%= pkg.name %>',
            '* Version: <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)',
            '* Development By: <%= pkg.developedBy %>',
            '* Copyright(c): <%= grunt.template.today("yyyy") %>',
            '*/'
        ],

        /**
         * The different constant names that will be use to build our html files.
         * @example <!-- @if NODE_ENV == 'DEVELOPMENT' -->
         */
        env: {
            src: {
                NODE_ENV : 'DEVELOPMENT'
            },
            web : {
                NODE_ENV : 'PRODUCTION'
            }
        },

        /**
         * Cleans or deletes our production folder before we create a new production build.
         */
        clean: {
            ts: ['ts/**/*.js'],
            //js: ['js/**/*']
        },

        /**
         * Copies certain files over from the development folder to the production folder so we don't have to do it manually.
         */
        copy: {
            web:  {
                files: [
                    // Copy favicon.ico file from development to production
                    { expand: true, cwd: '<%= DEVELOPMENT_PATH %>', src: 'favicon.ico', dest: '<%= PRODUCTION_PATH %>' },
                    // Copy the media folder from development to production
                    { expand: true, cwd: '<%= DEVELOPMENT_PATH %>', src: ['assets/media/**'], dest: '<%= PRODUCTION_PATH %>' },
                    // Copy the index.html file from development to production
                    { expand: true, cwd: '<%= DEVELOPMENT_PATH %>', dest: '<%= PRODUCTION_PATH %>', src: ['index.html'], filter: 'isFile', dot: true },
                    // Copy require.js file from development to production
                    { expand: true, cwd: '<%= DEVELOPMENT_PATH %>' + 'assets/vendor/require/', src: 'require.js', dest: '<%= PRODUCTION_PATH %>' + 'assets/scripts/' }
                ]
            }
        },

        /**
         * Prepends the banner above to the minified files.
         */
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner.join("\\n") %>',
                    linebreak: true
                },
                files: {
                    src: [
                        '<%= PRODUCTION_PATH %>' + 'assets/scripts/app.min.js',
                        '<%= PRODUCTION_PATH %>' + 'assets/styles/app.min.css'
                    ]
                }
            }
        },

        concat: {
            all: {
                src: [
                    'js/plugin/jquery.eventListener.js',
                    'js/util/ComponentFactory.js',
                    'js/util/DateUtil.js',
                    'js/util/MathUtil.js',
                    'js/util/MerchantUtil.js',
                    'js/util/NumberUtil.js',
                    'js/util/StringUtil.js',
                    'js/util/TemplateFactory.js',
                    'js/util/Util.js',
                    'js/util/ValidationUtil.js',
                    'js/util/Extend.js',
                    'js/BaseObject.js',
                    'js/ObjectManager.js',
                    'js/event/BaseEvent.js',
                    'js/event/native/NavigatorEvents.js',
                    'js/event/ApplicationCacheEvent.js',
                    'js/event/EventDispatcher.js',
                    'js/event/EventBroker.js',
                    'js/event/LocalStorageEvent.js',
                    'js/event/NetworkMonitorEvent.js',
                    'js/event/RouterEvent.js',
                    'js/event/TimerEvent.js',
                    'js/util/Timer.js',
                    //'js/util/BrowserUtil.js',
                    'js/controller/ApplicationCacheController.js',
                    'js/controller/LocalStorageController.js',
                    'js/controller/Router.js',
                    'js/geom/Point.js',
                    'js/model/BaseModel.js',
                    'js/model/Collection.js',
                    'js/model/Route.js',
                    'js/net/NetworkMonitor.js',
                    'js/display/DisplayObject.js',
                    'js/display/DisplayObjectContainer.js',
                    'js/display/DOMElement.js',
                    'js/display/Bitmap.js',
                    'js/display/CanvasElement.js',
                    'js/display/Sprite.js',
                    'js/display/Stage.js',
                    'js/display/TextField.js'
                ],
                dest: './structurejs.js'
            },
            view: {
                src: [
                    'js/display/Stage.js',
                    'js/display/DOMElement.js',
                    'js/display/DisplayObjectContainer.js',
                    'js/display/DisplayObject.js',
                    'js/event/BaseEvent.js',
                    'js/event/EventDispatcher.js',
                    'js/util/ComponentFactory.js',
                    'js/util/TemplateFactory.js',
                    'js/util/Extend.js',
                    'js/ObjectManager.js',
                    'js/BaseObject.js',
                    'js/util/Util.js'
                ],
                dest: './structurejs.view.js'
            }
        },

        uglify: {
            all: {
                files: {
                    './structurejs.min.js': ['./structurejs.js']
                }
            },
            view: {
                files: {
                    './structurejs.view.min.js': ['./structurejs.view.js']
                }
            }
        },

        /**
         * YUIDoc plugin that will generate documentation from our YUI comments.
         */
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    'linkNatives': 'true',
                    paths: '<%= DEVELOPMENT_PATH %>',
                    outdir: '<%= BASE_PATH %>docs',
                    themedir: 'friendly-theme',
                    extension: '.js',                                   // Default '.js' <comma-separated list of file extensions>
                    exclude: ''
                }
            }
        },

        ts: {
            default: {
                src: ['<%= BASE_PATH %>' + 'ts/**/*.ts'],
                outDir: '<%= DEVELOPMENT_PATH %>',
                options: {
                    target: 'es5',
                    module: 'umd',
                    basePath: '',
                    sourceMap: false,
                    declaration: false,
                    comments: true
                }
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js',
                autoWatch: false
            },
            ci: {
                singleRun: true
            },
            unit: {
                background: true
            }
        }

    });

    /**
     * Grunt tasks:
     *
     * grunt        (Will build and run your development code/server)
     * grunt web    (Will build and run your production code/server)
     * grunt doc    (Will generate the YUI documentation from the code comments)
     */
    grunt.registerTask('default', [
        'clean',
        'ts'
    ]);

    grunt.registerTask('docs', [
        'yuidoc'
    ]);

    grunt.registerTask('test', [
        'karma:ci'
    ]);

    grunt.registerTask('all', [
        'concat',
        'uglify'
    ]);

};