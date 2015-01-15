/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("arrowView", ["backbone", "arrow"], function() {
    "use strict";

    app.ArrowView = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click button.del' : 'removeArrow',
            "change input"     : "updateArrow"
        },

        template: _.template($('#arrow-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'removeArrow', 'unRender', 'updateArrow'); // every function that uses 'this' as the current object should be in here

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

        removeArrow: function() {
            this.model.destroy();
        },

        updateArrow: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        }

    });

});
