/*global define:false, Backbone:false */
var app = app || {};

define(["backbone", "weapons/weapon"], function() {
    "use strict";

    app.Weapons = Backbone.Collection.extend({
        model: app.Weapon
    });

});
