/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/

if (!localStorage.user_id) {
	(function ($) {
		"use strict";

		/* Preloader */
		$(window).on('load', function () {
			var preloaderFadeOutTime = 500;

			function hidePreloader() {
				var preloader = $('.spinner-wrapper');
				setTimeout(function () {
					preloader.fadeOut(preloaderFadeOutTime);
				}, 500);
			}

			hidePreloader();
		});


		/* Navbar Scripts */
		// jQuery to collapse the navbar on scroll
		$(window).on('scroll load', function () {
			if (!localStorage.user_id) {
				if ($(".navbar").offset().top > 20) {
					$(".fixed-top").addClass("top-nav-collapse");
				} else {
					$(".fixed-top").removeClass("top-nav-collapse");
				}
			}
		});

		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$(function () {
			$(document).on('click', 'a.page-scroll', function (event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 600, 'easeInOutExpo');
				event.preventDefault();
			});
		});

		// closes the responsive menu on menu item click
		$(".navbar-nav li a").on("click", function (event) {
			if (!$(this).parent().hasClass('dropdown'))
				$(".navbar-collapse").collapse('hide');
		});

		/* Card Slider - Swiper */
		var cardSlider = new Swiper('.card-slider', {
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 3,
			spaceBetween: 20,
			breakpoints: {
				// when window is <= 992px
				992: {
					slidesPerView: 2
				},
				// when window is <= 768px
				768: {
					slidesPerView: 1
				}
			}
		});

		/* Counter - CountTo */
		var a = 0;
		$(window).scroll(function () {
			if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
				var oTop = $('#counter').offset().top - window.innerHeight;
				if (a == 0 && $(window).scrollTop() > oTop) {
					$('.counter-value').each(function () {
						var $this = $(this),
							countTo = $this.attr('data-count');
						$({
							countNum: $this.text()
						}).animate({
								countNum: countTo
							},
							{
								duration: 2000,
								easing: 'swing',
								step: function () {
									$this.text(Math.floor(this.countNum));
								},
								complete: function () {
									$this.text(this.countNum);
									//alert('finished');
								}
							});
					});
					a = 1;
				}
			}
		});


		/* Removes Long Focus On Buttons */
		$(".button, a, button").mouseup(function () {
			$(this).blur();
		});

	})(jQuery);
}
