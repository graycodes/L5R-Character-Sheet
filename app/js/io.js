/*global define:false, Backbone:false, saveAs:false, _:false */
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
            woundHeal: app.woundHeal
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

            reader.onload = (function() {
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

            _(fileData.skills).each(function(skill) {
                app.skillsView.collection.add(skill);
            });

            _(fileData.weapons).each(function(weapon) {
                app.weaponsView.collection.add(weapon);
            });

            _(fileData.arrows).each(function(arrow) {
                app.arrowsView.collection.add(arrow);
            });

            _(app.statusesView.collection.models).each(function(status) {
                console.log("removing: " + status.attributes.name);
                status.view.unRender();
            });
            _(fileData.statuses).each(function(status) {
                app.statusesView.collection.add(status);
            });

            app.initiative.attributes = fileData.initiative;
            app.initiative.trigger('change');

            app.armorTN.attributes = fileData.armorTN;
            app.armorTN.trigger('change');

            app.armor.attributes = fileData.armor;
            app.armor.trigger('change');

            _(app.woundLevelsView.collection.models).each(function(woundLevel) {
                console.log("removing: " + woundLevel.attributes.name);
                console.log(woundLevel);
                woundLevel.view.unRender();
            });
            _(fileData.woundLevels).each(function(woundLevel) {
                app.woundLevelsView.collection.add(woundLevel);
            });

            app.woundHeal.attributes = fileData.woundHeal;
            app.woundHeal.trigger('change');


        }

    });

    app.io = new IO();

});
