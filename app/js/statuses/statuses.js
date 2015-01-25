/*global define:false, Backbone:false */
var app = app || {};

define(["statuses/status"], function() {
    "use strict";

    app.Statuses = Backbone.Collection.extend({
        model: app.Status
    });

});
