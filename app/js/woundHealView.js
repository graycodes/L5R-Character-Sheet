/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("woundHealView", ["backbone", "woundHeal"], function() {
    "use strict";

    var WoundHealView = Backbone.View.extend({

        id: 'woundHeal',
	
	model: app.woundHeal,

        events: {
            "change input[type='text']": "updateWoundHeal",
            "change input[type='number']": "updateWoundHeal"
        },

        template: _.template($('#woundHeal-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'updateWoundHeal');

            this.model.bind('change', this.render);
            $('#woundHeal-template').after(this.el);
	    this.render();
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        updateWoundHeal: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        },


    });

    app.woundHealView = new WoundHealView();

});
