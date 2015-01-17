/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("statusesView", ["backbone", "status", "statusView", "statuses"], function() {
    "use strict";

    var StatusesView = Backbone.View.extend({

        el: $('#statuses'),

        events: {
            'click button.add': 'addStatus'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'appendStatus');

            this.collection = new app.Statuses();
            this.collection.bind('add', this.appendStatus); // collection event binder

            this.render();

            this.addStatus({
                name: 'Honor',
                rank: 2,
                points: 0
            });
            this.addStatus({
                name: 'Glory',
                rank: 2,
                points: 0
            });
            this.addStatus({
                name: 'Status',
                rank: 2,
                points: 0
            });
            this.addStatus({
                name: 'Shadowlands Taint',
                rank: 0,
                points: 0
            });

        },

        addStatus: function(options) {
            var status = new app.Status(options);
            this.collection.add(status);
        },

        appendStatus: function(status) {
            var statusView = new app.StatusView({
                model: status
            });
            status.view = statusView;
            $(this.el).append(statusView.render().el);
        },

        render: function () {
            var that = this;
            _(this.collection.models).each(function(status){
                that.appendStatus(status);
            }, this);
        }

    });

    app.statusesView = new StatusesView();

});
