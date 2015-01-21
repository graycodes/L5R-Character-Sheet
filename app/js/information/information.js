/*global define:false*/
var app = app || {};

define(["backbone"], function(Backbone) {
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

    return Information;

});
