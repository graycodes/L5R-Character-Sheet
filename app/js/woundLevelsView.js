/*global define:false, Backbone:false, _:false, $:false */
var app = app || {};

define("woundLevelsView", ["backbone", "woundLevel", "woundLevelView", "woundLevels"], function() {
    "use strict";

    var WoundLevelsView = Backbone.View.extend({

        el: $('#woundLevels'),

        events: {
            'click button.add': 'addWoundLevel'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'appendWoundLevel');

            this.collection = new app.WoundLevels();
            this.collection.bind('add', this.appendWoundLevel); // collection event binder

            this.render();

	    this.addWoundLevel({
		name: 'Healthy +0'
	    });
	    this.addWoundLevel({
		name: 'Nicked +3'
	    });
	    this.addWoundLevel({
		name: 'Grazed +5'
	    });
	    this.addWoundLevel({
		name: 'Hurt +10'
	    });
	    this.addWoundLevel({
		name: 'Injured +15'
	    });
	    this.addWoundLevel({
		name: 'Crippled +20'
	    });
	    this.addWoundLevel({
		name: 'Down +40'
	    });
	    this.addWoundLevel({
		name: 'Out'
	    });

        },

        addWoundLevel: function(options) {
            var woundLevel = new app.WoundLevel(options);
            this.collection.add(woundLevel);
        },

        appendWoundLevel: function(woundLevel) {
            var woundLevelView = new app.WoundLevelView({
                model: woundLevel
            });
            $(this.el).append(woundLevelView.render().el);
        },

        render: function () {
            var that = this;
            _(this.collection.models).each(function(woundLevel){
                that.appendWoundLevel(woundLevel);
            }, this);
        }

    });

    app.woundLevelsView = new WoundLevelsView();

});
