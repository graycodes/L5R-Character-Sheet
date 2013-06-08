/*global Backbone:false */
var app = app || {};

(function() {
    "use strict";

    app.Skill = Backbone.Model.extend({
        defaults: {
            school: 0,
            name: "",
            rank: "",
            trait: "",
            roll: "",
            emphases: ""
        }
    });

}());