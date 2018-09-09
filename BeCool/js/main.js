$(document).ready(function(){

	$('.pre-header-tel__lang > img').on('click', function() {
			$('.pre-header-tel__lang').find('img')
			.removeClass('pre-header-tel__lang--active')
			$(this).addClass('pre-header-tel__lang--active');
	});

	$('.main-droplist').hover(function(e) {
		event.stopPropagation(e);
		$(this).children('ul').toggleClass('active');
		$(".main-header .fa").toggleClass('active');
	});

	$('.whatwedo-group').hover(function() {
		var $this = $(this)
		$this.toggleClass('active');
		$this.find('.whatwedo-group-wrap').toggleClass('active');
		$this.find('.whatwedo-group-item__icon .whatwedo__icon').toggleClass('active');
		$this.find('.whatwedo-group-item__title').toggleClass('active');
		$this.find('.global-link span').toggleClass('active');
		$this.find('.global-link a').toggleClass('active');

	});

	$('.counters-items').hover(function() {
		var $this = $(this)
		$this.toggleClass('active');
		$this.find('.counters__num').toggleClass('active');
		$this.find('.counters-items__link span').toggleClass('active');
		$this.find('.counters-items__link a').toggleClass('active');

	});
		
	$('.projects-items').hover(function () {
		var $this = $(this);
		$this.find('.projects-desk').toggleClass('active');
		$this.find('.projects__link a').toggleClass('active');
		$this.find('.projects__link span').toggleClass('active');
	});	

	$('.work-item-wrap').hover(function() {
		var $this = $(this)
		$this.toggleClass('active');
		$this.find('.work__icon svg').toggleClass('active');
		$this.find('.global-link span').toggleClass('active');
		$this.find('.global-link a').toggleClass('active');

	});

	$('.form-field .form__input').focus(function() {
			$label = $(this).parent().find('label');
			$label.addClass('active');
	});

	$('.form-field .form__input').blur(function() {
			if ($(this).val().replace(/^\s+|\s+$/g, "").length == 0) {
				$label.removeClass('active');
			}

	});		

	$('.partners-wrap').slick({
		autoplay: true,
		variableWidth: true,
		arrows: false,
		swipeToSlide: true,
	  slidesToShow: 9
	});

});
