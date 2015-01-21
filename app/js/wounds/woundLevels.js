/*global define:false, Backbone:false */
var app = app || {};

define(["backbone", "wounds/woundLevel"], function() {
    "use strict";

    app.WoundLevels = Backbone.Collection.extend({
        model: app.WoundLevel
    });

});
