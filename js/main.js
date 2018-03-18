
    
	$(document).ready(function(){
  	
		$('.js-slider-respons').slick({
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
			  responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			      breakpoint: 1000,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 830,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    }


				],

				nextArrow: '<button type="button" class="slick-next"></button>',
				prevArrow: '<button type="button" class="slick-prev"></button>'

		});

			$('.slider-pic-item').hover (function () {
					$(this).find(".slider-pic__link").toggleClass('slider-pic__link--active');
			});

			$('.service-svg').hover(function() {
				$(this).find('.layer-1').toggleClass('active-layer-1');
				$(this).find('.layer-2').toggleClass('active-layer-2');
				});

			$(".hamburger").click(function(){
		    $(this).toggleClass("is-active");
		    $('.header-nav').toggleClass('active');
		  });
		  	
});
