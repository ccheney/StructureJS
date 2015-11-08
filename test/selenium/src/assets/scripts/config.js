require.config({
    paths: {
        'requirejs': '../vendor/requirejs/require',
        'structurejs': '../vendor/structurejs/js',
        'jquery': '../vendor/jquery/dist/jquery.min',
        'handlebars': '../vendor/handlebars/handlebars.runtime.min',
        'templates': './templates'
    },

    shim: {
        'jquery': {
            exports: '$'
        }
    },

    waitSeconds: 120
});
