var app = app || {};

(function() {
    "use strict";

    var InformationView = Backbone.View.extend({

    	el: $('#info'),

    	model: app.information,

    	events: {
    		"change input" : "setInfo",
    	},

        setInfo: function(e) {
        	this.model.set(e.target.id, e.target.value);
        },

        initialize: function() {
        	this.render();
        },

        render: function () {
            this.el.innerHTML = _.template(this.el.innerHTML)(this.model.attributes);
        }

    });

    app.informationView = new InformationView();

}());