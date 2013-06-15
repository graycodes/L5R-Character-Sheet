/*global $:false, Backbone:false, _:false */
var app = app || {};

(function() {
    "use strict";

    var InformationView = Backbone.View.extend({

        el: $('#info'),

        model: app.information,

        events: {
            "change input" : "setInfo"
        },

        initialize: function() {
            _.bindAll(this, 'render');

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
            console.log(this.model.attributes)
            this.el.innerHTML = _.template(this.el.innerHTML)(this.model.attributes);
        }

    });

    app.informationView = new InformationView();

}());