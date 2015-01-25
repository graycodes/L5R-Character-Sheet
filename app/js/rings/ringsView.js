/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["rings/rings", "../eventBus"], function() {
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
            this.model.setRings(e);
            this.render();
        },

        getRingRanks: function() {
            return _.pluck(this.model.attributes, 'rank');
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }

    });

    app.ringsView = new RingsView();

});
