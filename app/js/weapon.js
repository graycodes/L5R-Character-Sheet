/*global define:false, Backbone:false */
var app = app || {};

define("weapon", ["backbone"], function() {
    "use strict";

    app.Weapon = Backbone.Model.extend({
        defaults: {
	    type: "",
	    attackRoll: "",
	    damageRoll: "",
	    bonus: "",
	    notes: ""
        }

    });

});
