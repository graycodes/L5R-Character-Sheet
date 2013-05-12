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

            this.model.attributes[ring].rank = this.getHighestAttribute(ring);

            this.render();
        },

        getRing: function(id) {
            return id.substr(0, (id.indexOf('-') === -1 ? id.length : id.indexOf('-')));
        },

        getAttribute: function(id) {
            return id.substr((id.indexOf('-') === -1 ? 0 : id.indexOf('-') + 1), id.length);
        },

        getHighestAttribute: function(ring) {
            var highest = 0;
            for(var attribute in this.model.attributes[ring]) {
                if (this.model.attributes[ring].hasOwnProperty(attribute) && attribute !== 'rank') {
                    if (this.model.attributes[ring][attribute] > highest) {
                        highest = this.model.attributes[ring][attribute];
                    }
                }
            }
            return highest;
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