/*global require:false*/
require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore-amd/underscore',
        backbone: '../bower_components/backbone/backbone',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        backbone: {
            deps: ['jquery', 'underscore']
        }
    }
});

require(["jquery", "underscore", "bootstrap", "backbone"], function ($, _) {
    "use strict";

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    require(["informationView", "ringsView", "skillsView"]);
});