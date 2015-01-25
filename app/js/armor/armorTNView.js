/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["armor/armorTN"], function() {
    "use strict";

    var ArmorTNView = Backbone.View.extend({

        id: 'armorTNs',

        model: app.armorTN,

        events: {
            "change input": "updateArmorTN"
        },

        template: _.template($('#armorTN-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'updateArmorTN');

            this.model.bind('change', this.render);
            $('#armorTN-template').after(this.el);
            this.render();
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        updateArmorTN: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        }

    });

    app.armorTNView = new ArmorTNView();

});
