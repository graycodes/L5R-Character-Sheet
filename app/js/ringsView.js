/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("ringsView", ["backbone", "rings", "eventBus"], function() {
    "use strict";

    var RingsView = Backbone.View.extend({

        id: 'rings',

        model: app.rings,

        events: {
            "change input" : "setRings"
        },

        template: _.template($('#rings-template').html()),

        initialize: function() {
            _.bindAll(this, 'render');
            $('#rings-template').after(this.el);
            this.model.bind('change', this.render);
            this.render();
        },

        setRings: function(e) {
            var ring       = this.getRing(e.target.id),
                attribute  = this.getAttribute(e.target.id),
                lowestAttr;
	    
	    ring = ring === 'void' ? 'avoid' : ring;// Rename void->avoid

            this.model.attributes[ring][attribute] = e.target.value;

            lowestAttr = this.getLowestAttribute(ring);

            this.model.attributes[ring].rank = lowestAttr;

            app.eventBus.trigger('setRings', this.model.attributes);

            this.render();
        },

        getRing: function(id) {
            return id.substr(0, (id.indexOf('-') === -1 ? id.length : id.indexOf('-')));
        },

        getRingRanks: function() {
            return _.pluck(this.model.attributes, 'rank');
        },

        getAttribute: function(id) {
            return id.substr((id.indexOf('-') === -1 ? 0 : id.indexOf('-') + 1), id.length);
        },

        getAttributes: function(ring) {
            return _.omit(this.model.attributes[ring], 'rank');
        },

        getLowestAttribute: function(ring) {
            return +_.min(this.getAttributes(ring), function(attr) {return attr;});
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }

    });

    app.ringsView = new RingsView();

});
