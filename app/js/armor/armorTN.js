/*global define:false, Backbone:false */
var app = app || {};

define([], function() {
    "use strict";

    var ArmorTN = Backbone.Model.extend({
        defaults: {
            type: "",
            reduction: 0,
            current: 0
        }

    });

    app.armorTN = new ArmorTN();

});
