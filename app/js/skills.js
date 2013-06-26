/*global define:false, Backbone:false */
var app = app || {};

define("skills", ["backbone", "main", "skill"], function() {
    "use strict";

    app.Skills = Backbone.Collection.extend({
        model: app.Skill
    });

});