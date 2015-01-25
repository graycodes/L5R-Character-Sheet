/*global define:false, Backbone:false */
var app = app || {};

define([], function() {
    "use strict";

    app.WoundLevel = Backbone.Model.extend({
        defaults: {
            name: "",
            penalty: 0,
            total: 0,
            current: 0
        }

    });

});
