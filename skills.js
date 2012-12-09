//SKILLS
(function() {

	$(document).ready( function() {
		$('#skills').find('input, select')
			.change(setRoll);
	});

	var setRoll = function(e) {	
		//set the value of the roll to be trait / ring
		var skill = getSkill($(this));
		var trait = getTrait($(this));
		
		$(this).parent().find('.skill-roll').val((trait + skill) + " k " + trait); //this is where it'd be really useful to just have a model we could update.
	};
	
	var getSkill = function(elm) {
		return Number($(elm).parent().find('.skill-rank').val()) || 0;
	};

	var getTrait = function(elm) {
		//get the trait from the dropdown, then find the value from the #rings section.
		var traitName = $(elm).parent().find('.skill-trait').val().toLowerCase();
		console.log($('#rings').find('.' + traitName).val);
		return Number($('#rings').find('.' + traitName).val());
	};
})();