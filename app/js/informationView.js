/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("informationView", ["backbone", "information"], function() {
    "use strict";

    var InformationView = Backbone.View.extend({

        id: 'info',

        model: app.information,

        events: {
            "change input" : "setInfo"
        },

        template: _.template($('#info-template').html()),

        initialize: function() {
            _.bindAll(this, 'render');
            $('#info-template').after(this.el);

            this.model.bind('change', this.render);
            this.render();
        },

        setInfo: function(e) {
            this.model.set(e.target.id, e.target.value);
        },

        setInsight: function(rings, skills) {
            this.model.set('insight', this.getInsightValue(rings, skills));
        },

        getInsightValue: function(skills, rings) {
            var a = _.reduce(rings, function(memo, num){ return memo + num * 10; }, 0);
            return a + (+skills); //FIX ME
        },

        render: function () {
            console.log(this.el);
            console.log(this.template(this.model.attributes));
            $(this.el).html(this.template(this.model.attributes));
            return this;
        },

    });

    app.informationView = new InformationView();

});
