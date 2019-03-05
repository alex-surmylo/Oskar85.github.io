$( function() {
    $( ".datepicker" ).datepicker({
    		showAnim: "fadeIn",
    		showOn: "both",
    		buttonImageOnly: true,
    		buttonImage: "img/datapicker-icon.png" 
		})

		$( ".selectmenu" ).selectmenu({
			width: 200
		});

		$('.main-header__burger').on('click', function () {
			$('.header-content__nav').toggleClass('is-open');
			$('.main').toggleClass('is-open');
			$('.main-content').toggleClass('is-open');
		})


		$(window).bind('resize', function() {
			if ($(window).width() < 1020) {
				$('.header-content__nav').height($('.main').height());
			}	else {
				$('.header-content__nav').height('auto');
			}
		});

		
});
