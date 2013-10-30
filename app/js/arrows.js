/*global define:false, Backbone:false */
var app = app || {};

define("arrows", ["backbone", "arrow"], function() {
    "use strict";

    app.Arrows = Backbone.Collection.extend({
        model: app.Arrow
    });

});
