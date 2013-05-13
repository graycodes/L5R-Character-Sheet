/*global _:false, Backbone:false, $:false */
var app = app || {};

(function() {
    "use strict";

    var RingsView = Backbone.View.extend({

        id: 'rings',

        model: app.rings,

        events: {
            "change input" : "setRings"
        },

        template: _.template($('#rings-template').html()),

        setRings: function(e) {
            var ring      = this.getRing(e.target.id);
            var attribute = this.getAttribute(e.target.id);

            this.model.attributes[ring][attribute] = e.target.value;

            this.model.attributes[ring].rank = this.getLowestAttribute(ring);

            this.render();
        },

        getRing: function(id) {
            return id.substr(0, (id.indexOf('-') === -1 ? id.length : id.indexOf('-')));
        },

        getAttribute: function(id) {
            return id.substr((id.indexOf('-') === -1 ? 0 : id.indexOf('-') + 1), id.length);
        },

        getAttributes: function(ring) {
            return _.omit(this.model.attributes[ring], 'rank');
        },

        getLowestAttribute: function(ring) {
            return _.min(this.getAttributes(ring), function(attr) {return attr;});
        },

        initialize: function() {
            $('#rings-template').after(this.el);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }

    });

    app.ringsView = new RingsView();

}());