/*global require:false, _*/
require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore-amd/underscore',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette',
        bootstrap: 'vendor/bootstrap',
        saveAs: 'vendor/saveAs'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        marionette : {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});

require(['backbone', 'marionette'], function (Backbone) {
    'use strict';

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    require(['information/informationView',
             'rings/ringsView',
             'skills/skillsView',
             'io',
             'weapons/weaponsView',
             'arrows/arrowsView',
             'statuses/statusesView',
             'initiative/initiativeView',
             'armor/armorTNView',
             'armor/armorView',
             'wounds/woundLevelsView',
             'wounds/woundHealView']);

});
