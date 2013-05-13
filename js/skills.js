/*global Backbone:false */
var app = app || {};

(function() {
    "use strict";

    var Skills = Backbone.Model.extend({
        defaults: {
            school: 0,
            name: "",
            rank: "",
            trait: "",
            roll: "",
            emphases: ""
        }
    });

    app.skills = new Skills();

}());