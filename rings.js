//RINGS
(function() {

	$(document).ready( function() {
		$('#rings').find('input:enabled').change(setRing);
	});

	var setRing = function(e) {	
		var ring = getRing(e.target);		
		var traits = $(ring).find('input:enabled').map(function() {return $(this).val();}).get();		
		var ringValue = (traits[0] < traits[1] ? traits[0] : traits[1]);
		
		$('#rings').find(ring).find('input:disabled').val(ringValue);
	};
	
	var getRing = function(traitInput) {
		return $(traitInput).parent();
	}

})();