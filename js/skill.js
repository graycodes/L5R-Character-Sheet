/*global Backbone:false */
var app = app || {};

(function() {
    "use strict";

    app.Skill = Backbone.Model.extend({
        defaults: {
            school: false,
            name: "",
            rank: "",
            trait: "",
            roll: "",
            emphases: ""
        },

        toggle: function() {
            this.save({school: !this.get('school')});
        }
    });

}());