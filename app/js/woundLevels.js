/*global define:false, Backbone:false */
var app = app || {};

define("woundLevels", ["backbone", "woundLevel"], function() {
    "use strict";

    app.WoundLevels = Backbone.Collection.extend({
        model: app.WoundLevel
    });

});
