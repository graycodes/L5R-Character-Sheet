/*global define:false, Backbone:false */
var app = app || {};

define([], function() {
    "use strict";

    app.Arrow = Backbone.Model.extend({
        defaults: {
            type: "",
            damage: "",
            quantity: 0
        }

    });

});
