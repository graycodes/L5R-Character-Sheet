/*global Backbone:false */
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
			avoid: {
				rank: 0
			}
		}
	});

	app.rings = new Rings();

}());

/*
(function() {
    "use strict";

    var Attribute = Backbone.Model.extend({
        defaults: {
            name: "",
            rank: ""
        }
    });

    var Ring = Backbone.Model.extend({
        defaults: {
            name: "",
            attributes: []
        }
    });

    var Rings = Backbone.Collection.extend({
        model: Ring
    });

    var earth = new Ring({
        name: "Earth", attributes: [
            new Attribute({name: "Stamina", rank: 0}),
            new Attribute({name: "Willpower", rank: 0})
        ]
    });

    var air = new Ring({
            name: "Air", attributes: [
                new Attribute({name: "Reflexes", rank: 0}),
                new Attribute({name: "Perception", rank: 0})
            ]
        });

    var fire = new Ring({
        name: "Fire", attributes: [
            new Attribute({name: "Intelligence", rank: 0}),
            new Attribute({name: "Agility", rank: 0})
        ]
    });

    var water = new Ring({
        name: "Water", attributes: [
            new Attribute({name: "Strength", rank: 0}),
            new Attribute({name: "Awareness", rank: 0})
        ]
    });

    var voids = new Rings({
        name: "Void", attributes: []
    });

    app.rings = new Rings([earth, air, fire, water, voids]);

}());*/