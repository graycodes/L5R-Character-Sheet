//STATUS BARS
(function() {

	var BAR_SECTION_WIDTH = 21;
	
	$(document).ready( function() {
		$('#status').find('input')
			.change(updateStatusBar);
	});

	var updateStatusBar = function() {	
		var value = $(this).val();		
		value = value <= 10 ? value : 0; 
		
		$(this).parent().parent()
			.find('.bar')
			.width(value * BAR_SECTION_WIDTH);
	}
	
})();