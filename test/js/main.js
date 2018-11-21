$(function(){

	let select = function () {
		$(document).on('click', '.select__header', function () {
			$(this).parent().toggleClass('select--open');
		});

		$(document).on('click', '.select__item', function () {
			let current = $(this).closest('.select').find('.select__current')[0];
			$(current).text($(this).text());
			$(this).closest('.select').removeClass('select--open');
		});
	}	

	let searchOn = function (e) {
		$(document).on('click', '.header__form .fa-search', function (e) {
			let $this = $(this);
			$this.parent().children('.header__search').focus();
			$this.parent().parent().find('a, .header-burger').addClass('disable');
		});
	}

	let searchOff = function (e) {
			$('.header__search').focusout(function(e) {
			$(this).parent().parent().find('a, .header-burger').removeClass('disable')
		});
	}	

	var menuDropdown = function(e) {
		$(document).on('mouseenter', '.header-nav .header-nav__item', function (e) {
			$('.header-nav .menu-dropdown').width($('body').width());
			$('.header .menu-dropdown').addClass('menu-dropdown--active');
			var resize = $('.header-nav').offset().left
			$('.menu-dropdown-wrap').offset({left: resize}).left
		});
		$(document).on('mouseleave', '.header-nav .header-nav__item', function (e) {
			$('.header .menu-dropdown').removeClass('menu-dropdown--active');
		});		
	}

	

	select();
	searchOn();
	searchOff();
	menuDropdown();

});