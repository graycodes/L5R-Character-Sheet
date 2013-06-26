require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery', 'bootstrap', 'underscore', 'backbone'], function ($) {
    'use strict';
    // use app here
    console.log('Running jQuery %s', $().jquery);


    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
});