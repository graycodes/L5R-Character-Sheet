/*global Backbone:false */
var app = app || {};

(function() {
    "use strict";

    app.Skills = Backbone.Collection.extend({
        model: app.Skill
    });

}());