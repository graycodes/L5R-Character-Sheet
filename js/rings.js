var app = app || {};

(function() {
	"use strict";

	var Rings = Backbone.Model.extend({
		defaults: {
			earth: {
				rank: 0,
				stamina: 0,
				willpower: 0
			},
			air: {
				rank: 0,
				reflexes: 0,
				awareness: 0
			},
			water: {
				rank: 0,
				strength: 0,
				perception: 0
			},
			fire: {
				rank: 0,
				agility: 0,
				intelligence: 0
			},
			'void': {
				rank: 0
			}
		}
	});

	app.rings = new Rings();

}());