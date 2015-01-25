/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define(["skills/skill", "skills/skillView", "skills/skills"], function() {
    "use strict";

    var SkillsView = Backbone.View.extend({

        el: $('#skills'),

        events: {
            'click button.add': 'addSkill'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'addSkill', 'appendSkill');

            this.collection = new app.Skills();
            this.collection.bind('add', this.appendSkill); // collection event binder

            this.render();
        },

        addSkill: function() {
            var skill = new app.Skill();
            this.collection.add(skill);
        },

        appendSkill: function(skill) {
            var skillView = new app.SkillView({
                model: skill
            });
            $(this.el).append(skillView.render().el);
        },

        render: function () {
            var that = this;
            _(this.collection.models).each(function(skill){ // in case collection is not empty
                that.appendSkill(skill);
            }, this);
        }

    });

    app.skillsView = new SkillsView();

});
