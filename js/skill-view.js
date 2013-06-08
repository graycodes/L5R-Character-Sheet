/*global _:false, Backbone:false, $:false */
var app = app || {};

(function() {
    "use strict";

    app.SkillView = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click button.del': 'removeSkill'
        },

        template: _.template($('#skill-template').html()),

        initialize: function() {
            _.bindAll(this, 'render', 'removeSkill', 'unrender'); // every function that uses 'this' as the current object should be in here

            this.model.bind('change', this.render);
            this.model.bind('remove', this.unrender);
        },

        render: function () {
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

        unrender: function () {
            $(this.el).remove();
            return this;
        },

        removeSkill: function() {
            console.log('test');
            this.model.destroy();
        }

    });

}());