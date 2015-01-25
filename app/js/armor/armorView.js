/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["armor/armor"], function() {
    "use strict";

    var ArmorView = Backbone.View.extend({

        id: 'armors',

        model: app.armor,

        events: {
            "change input[type='text']": "updateArmor",
            "change input[type='number']": "updateArmor"
        },

        template: _.template($('#armor-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'updateArmor');

            this.model.bind('change', this.render);
            $('#armor-template').after(this.el);
            this.render();
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        updateArmor: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        }


    });

    app.armorView = new ArmorView();

});
