/*global require, mocha, chai*/
require.config({
    paths: {
        jquery: '../../app/bower_components/jquery/jquery',
        underscore: '../../app/bower_components/underscore-amd/underscore',
        backbone: '../../app/bower_components/backbone/backbone',
        bootstrap: '../../app/js/vendor/bootstrap',
        saveAs: '../../app/js/vendor/saveAs'
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

require(["jquery", "underscore", "bootstrap", "backbone", "information"], function ($, _, bs, Backbone, information) {
    "use strict";

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    mocha.setup('bdd');

    window.expect = chai.expect;// FIXME

    mocha.run();
});
