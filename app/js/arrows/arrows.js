/*global define:false, Backbone:false */
var app = app || {};

define(["backbone", "arrows/arrow"], function() {
    "use strict";

    app.Arrows = Backbone.Collection.extend({
        model: app.Arrow
    });

});
