/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {

    require('jit-grunt')(grunt, { versioncheck: 'grunt-version-check' })({ customTasksDir: 'tasks' });

    grunt.option('dev', !grunt.option('prod'));

    grunt.initConfig({
        pkg: require('./package.json'),
        env: require('./build-env')
    });

    // -- Tasks ----------------------------------------------------------------

    grunt.registerTask('default', 'Run default tasks for the target environment.',
        // Ran `grunt`
        grunt.option('dev')   ? ['build'] :
        // Ran `grunt --prod`
        grunt.option('prod')  ? ['build'] : []
    );

    grunt.registerTask('build', 'Compile source and output to dest',
        ['buildScripts', 'buildStatic', 'precompileJst']
    );
};
