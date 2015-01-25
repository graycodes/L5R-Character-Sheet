/*global define:false, Backbone:false */
var app = app || {};

define([], function() {
    "use strict";

    app.Status = Backbone.Model.extend({
        defaults: {
            name: "",
            rank: 2,
            points: 0
        }

    });

});
