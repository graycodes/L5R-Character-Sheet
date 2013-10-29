/*global define:false, Backbone:false, saveAs:false */
var app = app || {};

define("io", ["backbone", "information", "rings", "skills"], function() {
    "use strict";

    var IO = Backbone.View.extend({

        el: "body",

        data: {
            info: app.information,
            rings: app.rings,
            skills: app.skillsView.collection

        },

        events: {
            "click button.save": "saveData"
        },

        getSaveData: function(data) {
	    var output = {};
            for (var model in data) {
                if (data.hasOwnProperty(model)) {
                    output[model] = data[model].toJSON();
                }
            }
            return [JSON.stringify(output)];
        },

        getFileName: function() {
            return ( this.data.info.name || "Character" ).replace(/\W/g, '') + ".l5r";
        },

        saveData: function() {
            var blob = new Blob(this.getSaveData(this.data), {type: 'text/plain;charset=utf-8'});
            saveAs(blob, this.getFileName());
        }

    });

    app.io = new IO();

});
