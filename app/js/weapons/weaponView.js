/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["backbone", "weapons/weapon"], function() {
    "use strict";

    app.WeaponView = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click button.del'             : 'removeWeapon',
            "change input[type='text']"    : "updateWeapon"
        },

        template: _.template($('#weapon-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'removeWeapon', 'unRender', 'updateWeapon'); // every function that uses 'this' as the current object should be in here

            this.model.bind('change', this.render);
            this.model.bind('remove', this.unRender);
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        unRender: function () {
            $(this.el).remove();
        },

        removeWeapon: function() {
            this.model.destroy();
        },

        updateWeapon: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        }


    });

});
