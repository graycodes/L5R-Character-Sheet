/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("skillView", ["backbone", "skill"], function() {
    "use strict";

    app.SkillView = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click button.del'             : 'removeSkill',
            "change input[type='text']"    : "updateSkill",
            "change select"                : "updateSkill",
            "click input[type='checkbox']" : "toggleSchoolSkill"
        },

        template: _.template($('#skill-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'removeSkill', 'unRender', 'updateSkill');

            this.model.bind('change', this.render);
            this.model.bind('remove', this.unRender);
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        unRender: function () {
            $(this.el).remove();
        },

        removeSkill: function() {
            this.model.destroy();
        },

        updateRoll: function() {
            this.model.set('roll', 1 );//needs access to the rings, and to get the dropdown working first.
        },

        updateSkill: function(e) {
            //this.updateRoll();
            this.model.set(e.target.dataset.name, e.target.value);
        },

        toggleSchoolSkill: function() {
            this.model.toggle();
        }

    });

});
