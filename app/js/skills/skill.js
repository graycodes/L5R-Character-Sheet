/*global define:false, Backbone:false */
var app = app || {};

define([], function() {
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

});
