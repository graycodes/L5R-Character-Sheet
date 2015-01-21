/*global define:false, Backbone:false */
var app = app || {};

define(["backbone"], function() {
    "use strict";

    var WoundHeal = Backbone.Model.extend({
        defaults: {
            rate: 0,
            modifiers: 0,
            current: ""
        }

    });

    app.woundHeal = new WoundHeal();

});
