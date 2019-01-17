$(function(){

	$('.pre-header-tel__lang > img').on('click', function() {
		$('.pre-header-tel__lang').find('img')
		.removeClass('pre-header-tel__lang--active')
		$(this).addClass('pre-header-tel__lang--active');
	});

	$('.pre-header-tel__lang > img').on('click', function() {
		$('.pre-header-tel__lang').find('img')
		.removeClass('pre-header-tel__lang--active')
		$(this).addClass('pre-header-tel__lang--active');
	});

	$('.main-droplist').hover(function(e) {
		$(this).children('ul').toggleClass('active');
		$(this).find(".fa").toggleClass('active');
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

	$('.projects-items .projects__link').hover(function () {
		var $this = $(this);
		$this.closest('.projects-items').find('.projects-desk').toggleClass('active');
		$this.closest('.projects-items').find('.projects__link a').toggleClass('active');
		$this.closest('.projects-items').find('.projects__link span').toggleClass('active');
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

	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 1) {
			$('.header').addClass('header-fix')
		}
		else
			$('.header').removeClass('header-fix')
	});

	var Menu = {

		el: {
			ham: $('.menu'),
			menuTop: $('.menu-top'),
			menuMiddle: $('.menu-middle'),
			menuBottom: $('.menu-bottom')
		},

		init: function() {
			Menu.bindUIactions();
		},

		bindUIactions: function() {
			Menu.el.ham
			.on(
				'click',
				function(event) {
					Menu.activateMenu(event);
					event.preventDefault();
				}
				);
		},

		activateMenu: function() {
			Menu.el.menuTop.toggleClass('menu-top-click');
			Menu.el.menuMiddle.toggleClass('menu-middle-click');
			Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
		}
	};

	Menu.init();


	$('.main-header__burger').on('click', function () {
		$('.main-header-menu').toggleClass('main-header-menu--open');
		$('body').toggleClass('no-scroll');
	})


	$('.js-arrow').click(() => {
    $('html, body').animate({
        scrollTop: $('.whatwedo').offset().top

    }, 1000);
    specialEasing: {
      scrollTop: 'swing'
    }
});

});