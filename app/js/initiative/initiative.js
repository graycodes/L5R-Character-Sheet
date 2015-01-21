/*global define:false, Backbone:false */
var app = app || {};

define(["backbone"], function() {
    "use strict";

    var Initiative = Backbone.Model.extend({
        defaults: {
            roll: "",
            modifiers: 0,
            current: 0
        }

    });

    app.initiative = new Initiative();

});
