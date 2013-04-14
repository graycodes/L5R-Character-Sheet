var app = app || {};

(function() {
    "use strict";

    var RingsView = Backbone.View.extend({

        el: $('#rings'),

        model: app.rings,

        events: {
            "change input" : "setRings",
        },

        setRings: function(e) {
            console.log(e.target.id);
            console.log(e.target.value);
            //this.model.set(e.target.id, e.target.value);
        },

        initialize: function() {
            console.log('rawr');
            this.render();
        },

        render: function () {
            this.el.innerHTML = _.template(this.el.innerHTML)(this.model.attributes);
        }

    });

    app.ringsView = new RingsView();

}());