/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("statusView", ["backbone", "status"], function() {
    "use strict";

    app.StatusView = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click button.del'             : 'removeStatus',
            "change input[type='text']"    : "updateStatus"
        },

        template: _.template($('#status-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'removeStatus', 'unRender', 'updateStatus'); // every function that uses 'this' as the current object should be in here

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

        removeStatus: function() {
            this.model.destroy();
        },

        updateStatus: function(e) {
            this.model.set(e.target.dataset.name, e.target.value);
        },


    });

});
