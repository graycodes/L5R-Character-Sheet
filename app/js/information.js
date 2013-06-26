/*global define:false, Backbone:false */
var app = app || {};

define("information", ["backbone"], function() {
    "use strict";

    var Information = Backbone.Model.extend({
        defaults: {
            name   : '',
            rank   : 0,
            clan   : '',
            exp    : '',
            school : '',
            insight: ''
        }
    });

    app.information = new Information();

});