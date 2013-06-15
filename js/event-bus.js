/*global Backbone:false, _:false */
var app = app || {};

(function() {
    "use strict";

    app.eventBus = _.extend({}, Backbone.Events);

    app.eventBus.on('test', function() {
        console.log('omgtotesamazeballs');
    });

    app.eventBus.on('setRings', function() {
        app.informationView.setInsight(1, app.ringsView.getRingRanks());
    });

    app.eventBus.trigger('test');

}());