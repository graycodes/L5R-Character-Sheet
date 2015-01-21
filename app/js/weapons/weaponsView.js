/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["backbone", "weapons/weapon", "weapons/weaponView", "weapons/weapons"], function() {
    "use strict";

    var WeaponsView = Backbone.View.extend({

        el: $('#weapons'),

        events: {
            'click button.add': 'addWeapon'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'appendWeapon');

            this.collection = new app.Weapons();
            this.collection.bind('add', this.appendWeapon); // collection event binder

            this.render();
        },

        addWeapon: function() {
            var weapon = new app.Weapon();
            this.collection.add(weapon);
        },

        appendWeapon: function(weapon) {
            var weaponView = new app.WeaponView({
                model: weapon
            });
            $(this.el).append(weaponView.render().el);
        },

        render: function () {
            var that = this;
            _(this.collection.models).each(function(weapon){
                that.appendWeapon(weapon);
            }, this);
        }

    });

    app.weaponsView = new WeaponsView();

});
