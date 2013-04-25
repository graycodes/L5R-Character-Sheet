/*global _:false, Backbone:false, $:false */
var app = app || {};

(function() {
    "use strict";

    var RingsView = Backbone.View.extend({

        el: $('#rings'),

        model: app.rings,

        events: {
            "change input" : "setRings"
        },

        setRings: function(e) {
            console.log(e.target.id);
            console.log(e.target.value);
            //this.model.set(e.target.id, e.target.value);
        },

        initialize: function() {
            console.log('rawr');
            this.render();
            console.log('pickles');
        },

        render: function () {
            var template = _.template(this.el.innerHTML);
            this.el.innerHTML = template(this.model.attributes);
        }

    });

    app.ringsView = new RingsView();

}());