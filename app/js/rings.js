/*global define:false, Backbone:false */
var app = app || {};

define("rings", ["backbone", "main"], function() {
    "use strict";

    var Rings = Backbone.Model.extend({
        defaults: {
            earth: {
                rank: 1,
                stamina: 1,
                willpower: 1
            },
            air: {
                rank: 1,
                reflexes: 1,
                awareness: 1
            },
            water: {
                rank: 1,
                strength: 1,
                perception: 1
            },
            fire: {
                rank: 1,
                agility: 1,
                intelligence: 1
            },
            avoid: {
                rank: 1
            }
        }
    });

    app.rings = new Rings();

});