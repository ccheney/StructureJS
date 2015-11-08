/*jshint node:true */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        // Compiles Handlebars hbs templates into JavaScript Templates (JST) templates.js
        handlebars: {
            compile: {
                options: {
                    amd: ['handlebars'],
                    namespace: 'JST',
                    // Registers all files that start with '_' as a partial.
                    partialRegex: /^_/,
                    // Shortens the file path for the templates.
                    processName: function (filePath) { // input:  src/templates/header.hbs
                        // output: templates/header
                        return filePath.slice(filePath.indexOf('template'), filePath.lastIndexOf('.'));
                    },
                    // Shortens the file path for the partials.
                    processPartialName: function (filePath) { // input:  src/templates/_header.hbs
                        // output: templates/_header
                        return filePath.slice(filePath.indexOf('template'), filePath.lastIndexOf('.'));
                    }
                },
                files: {
                    '<%= env.DIR_DEST %>/assets/scripts/templates.js': '<%= env.DIR_SRC %>/templates/template.hbs',
                    '<%= env.DIR_SRC %>/assets/scripts/templates.js': '<%= env.DIR_SRC %>/templates/template.hbs'
                }
            }
        }
    });

    grunt.registerTask('precompileJst', [
        'handlebars'
    ]);
};
