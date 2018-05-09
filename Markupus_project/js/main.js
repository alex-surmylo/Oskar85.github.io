$(document).ready(function(){
    
	$('.header-wrap__hamburger').on('click', function(){
		$('.header-modal, .header__lang').toggleClass('active');
			$('.footer').toggleClass('modal');
	})

});