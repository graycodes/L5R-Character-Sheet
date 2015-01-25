/*global define:false, Backbone:false, _:false */
var app = app || {};

define([], function() {
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
        },

        setRings: function(e) {
            var ring       = this.getRing(e.target.id),
                attribute  = this.getAttribute(e.target.id),
                lowestAttr;

            ring = ring === 'void' ? 'avoid' : ring;// Rename void->avoid

            this.attributes[ring][attribute] = e.target.value;

            lowestAttr = this.getLowestAttribute(ring);

            this.attributes[ring].rank = lowestAttr;

            app.eventBus.trigger('setRings', this.attributes);

        },

        getRing: function(id) {
            return id.substr(0, (id.indexOf('-') === -1 ? id.length : id.indexOf('-')));
        },

        getAttribute: function(id) {
            return id.substr((id.indexOf('-') === -1 ? 0 : id.indexOf('-') + 1), id.length);
        },

        getAttributes: function(ring) {
            return _.omit(this.attributes[ring], 'rank');
        },

        getLowestAttribute: function(ring) {
            return +_.min(this.getAttributes(ring), function(attr) {return attr;});
        }
    });



    app.rings = new Rings();

});
