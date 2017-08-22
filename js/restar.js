$(document).ready(function() {
	$('#edit').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400, 
		 	function(){
				$('#modal_form') 
					.css('display', 'block') 
					.animate({top: '50%'}, 200);
		});
	});
	$('#modal_close, #overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});

});

