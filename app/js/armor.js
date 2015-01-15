/*global define:false, Backbone:false */
var app = app || {};

define("armor", ["backbone"], function() {
    "use strict";

    var Armor = Backbone.Model.extend({
        defaults: {
            bonus: 0,
            quality: 0,
            notes: ""
        }

    });

    app.armor = new Armor();

});
