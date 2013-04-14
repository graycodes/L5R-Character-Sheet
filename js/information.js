var app = app || {};

(function() {
	"use strict";

	var Information = Backbone.Model.extend({
		defaults: {
			name   : '',
			rank   : '',
			clan   : '',
			exp    : '',
			school : '',
			insight: ''
		}
	});

	app.information = new Information();

}());