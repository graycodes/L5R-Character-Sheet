/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("initiativeView", ["backbone", "initiative"], function() {
    "use strict";

    var InitiativeView = Backbone.View.extend({

        id: 'initiatives',
	
	model: app.initiative,

        events: {
            "change input[type='text']": "updateInitiative"
        },

        template: _.template($('#initiative-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'updateInitiative');

            this.model.bind('change', this.render);
            $('#initiative-template').after(this.el);
	    this.render();
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        updateInitiative: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        },


    });

    app.initiativeView = new InitiativeView();

});
