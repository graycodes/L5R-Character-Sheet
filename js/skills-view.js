/*global _:false, Backbone:false, $:false */
var app = app || {};

(function() {
    "use strict";

    var SkillsView = Backbone.View.extend({

        id: 'skills',

        model: app.skills,

        events: {
            "change input" : "setSkills"
        },

        template: _.template($('#skills-template').html()),

        setSkills: function(e) {/*
            var ring      = this.getRing(e.target.id);
            var attribute = this.getAttribute(e.target.id);

            this.model.attributes[ring][attribute] = e.target.value;

            this.model.attributes[ring].rank = this.getLowestAttribute(ring);

            this.render();*/
        },

        getRing: function(id) {
            return id.substr(0, (id.indexOf('-') === -1 ? id.length : id.indexOf('-')));
        },

        getAttribute: function(id) {
            return id.substr((id.indexOf('-') === -1 ? 0 : id.indexOf('-') + 1), id.length);
        },

        getLowestAttribute: function(ring) {
            var attributes = _.omit(this.model.attributes[ring], 'rank');
            return _.min(attributes, function(attr) {return attr;});
        },

        initialize: function() {
            $('#skills-template').after(this.el);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }

    });

    app.skillsView = new SkillsView();

}());