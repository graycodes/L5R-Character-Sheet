/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["arrows/arrow", "arrows/arrowView", "arrows/arrows"], function() {
    "use strict";

    var ArrowsView = Backbone.View.extend({

        el: $('#arrows'),

        events: {
            'click button.add': 'addArrow'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'appendArrow');

            this.collection = new app.Arrows();
            this.collection.bind('add', this.appendArrow); // collection event binder

            this.render();
        },

        addArrow: function() {
            var arrow = new app.Arrow();
            this.collection.add(arrow);
        },

        appendArrow: function(arrow) {
            var arrowView = new app.ArrowView({
                model: arrow
            });
            $(this.el).append(arrowView.render().el);
        },

        render: function () {
            var that = this;
            _(this.collection.models).each(function(arrow){
                that.appendArrow(arrow);
            }, this);
        }

    });

    app.arrowsView = new ArrowsView();

});
