/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["backbone", "wounds/woundLevel"], function() {
    "use strict";

    app.WoundLevelView = Backbone.View.extend({

        tagName: 'div',

        events: {
            "change input[type='text']"    : "updateWoundLevel"
        },

        template: _.template($('#woundLevel-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'updateWoundLevel'); // every function that uses 'this' as the current object should be in here

            this.model.bind('change', this.render);
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        unRender: function () {
            $(this.el).remove();
        },

        updateWoundLevel: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        }

    });

});
