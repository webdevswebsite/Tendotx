(function($) {
    'use strict';

    		// sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});
    //Toggle Nav for mobile  menu

    $('.menu-toggle').click(function(){
        $('.menu-wrapper').toggleClass('active-nav');
    })
	//Toggle Nav for mobile  menu
    $('.open_bar').click(function(){
        $('nav').addClass('active-nav');
        $('.menu-toggle').addClass('closee');
    });
    $('.close_bar').click(function(){
        $('nav').removeClass('active-nav');
        $('.menu-toggle').removeClass('closee');
    });
	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    // Slider-lisi
    $('.slider_list').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // Service-lisi
    $('.service_list').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
			768: {
                items: 2
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
    // Counterup
    $('.counterup h1').counterUp({
        delay: 10,
        time: 1000
    });
    // testi list
    $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1 
            },
			768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    $('.testi_list_2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
			768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Blog list
    $('.blog_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
			768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Brand List
    $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
    // progress-bar
    if($('.progress-line').length) {
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
       }
       
    //   Progress-Bar Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // fan-fact-counterUp
    $('.single-fan-count h1').counterUp({
        delay: 10,
        time: 1500
    });

    // case-study
    $('.case_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })

$('.image_load').imagesLoaded(function() {

    if ($.fn.isotope) {

    var $portfolio = $('.image_load');

    $portfolio.isotope({

    itemSelector: '.grid-item',

    filter: '*',

    resizesContainer: true,

    layoutMode: 'masonry',

    transitionDuration: '0.8s'

});
    $('.menu-filtering li').on('click', function() {

    $('.menu-filtering li').removeClass('current_menu_item');

    $(this).addClass('current_menu_item');

    var selector = $(this).attr('data-filter');

    $portfolio.isotope({

    filter: selector,

    });

    });

    };

    });

         //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

})(jQuery);




















