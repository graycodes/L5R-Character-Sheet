/*global define:false, Backbone:false, saveAs:false */
var app = app || {};

define("io", ["saveAs", "backbone", "information", "rings", "skillsView", "weaponsView", "arrowsView", "statusesView", "initiativeView", "armorTNView", "armorView", "woundLevelsView", "woundHealView"], function() {
    "use strict";

    var IO = Backbone.View.extend({

        el: "body",

        data: {
            info: app.information,
            rings: app.rings,
            skills: app.skillsView.collection,
            weapons: app.weaponsView.collection,
	    arrows: app.arrowsView.collection,
	    statuses: app.statusesView.collection,
	    initiative: app.initiative,
	    armorTN: app.armorTN,
	    armor: app.armor,
	    woundLevels: app.woundLevelsView.collection,
	    woundHeal: app.woundHeal,
        },

        events: {
            "click button.save": "saveData",
            "change input.load": "loadData"
        },

        getSaveData: function(data) {
	    var output = {};
            for (var model in data) {
                if (data.hasOwnProperty(model)) {
		    console.log(data[model]);
                    output[model] = data[model].toJSON();
                }
            }
            return [JSON.stringify(output)];
        },

        getFileName: function() {
            return ( this.data.info.attributes.name || "Character" ).replace(/\W/g, '') + 
		".l5r";
        },

        saveData: function() {
            var blob = new Blob(this.getSaveData(this.data), {
                type: 'text/plain;charset=utf-8'
            });
            saveAs(blob, this.getFileName());
        },
        
        loadData: function(e) {
            var reader = new FileReader();
            var file = e.target.files[0];
            var that = this;

            reader.onload = (function(f) {
                return function(event) {
                    that.updateModels(JSON.parse(event.target.result));
                };
            }(file));

            reader.readAsText(file);
        },

        updateModels: function(fileData) {
            console.log(fileData);
            console.log(app);
            app.information.attributes = fileData.info;
            app.information.trigger('change');

            app.rings.attributes = fileData.rings;
            app.rings.trigger('change');
        }

    });

    app.io = new IO();

});
