jQuery(function($) {'use strict';

    $(function() {
        $( "#mac-contact, #outlook-contact, #thunderbird-contact" ).tooltip({
            show: {
                effect: "slideDown",
                delay: 250
            }
        });
    });

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Fit Vids
	if( $('#video-container').length ) {
		$("#video-container").fitVids();
	}

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){

		$('.main-slider, .to-animate').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if( $('.masonery_area').length ) {
			$('.masonery_area').masonry();//Masonry
		}

		var $portfolio_selectors = $('.portfolio-filter >li>a');
		
		if($portfolio_selectors.length) {
			
			var $portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}

	});


	$('.timer').each(count);
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
		
	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').fadeToggle(200);
	});

	// Contact form


    var form = $('#main-contact-form');
    form.submit(function(event){
        event.preventDefault();

        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'mess'              : $('textarea[name=message]').val()
        };
        var sentData = JSON.stringify(formData, null);

        var form_status = $('<div class="form_status"></div>');
		$.ajax({
            type: 'POST',
			url: $(this).attr('action'),
            data: sentData,
            datatype: 'json',
            encode: true,
			beforeSend: function(){

                form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Envoi en cours...</p>').fadeIn() );
			}
		}).done(function(data){

			form_status.html('<p class="text-success">Merci je vous répondrais dès que possible..</p>').delay(3000).fadeOut();
		});

    });

	// Progress Bar
	$.each($('div.progress-bar'),function(){
		$(this).css('width', $(this).attr('data-transition')+'%');
	});

	if( $('#gmap').length ) {
		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 43.04446,
			lng: -76.130791,
			scrollwheel:false,
			zoom: 16,
			zoomControl : false,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		map.addMarker({
			lat: 43.04446,
			lng: -76.130791,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#3e8bff',
		});
	}

});

$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();
	var height = $(window).height();
	$('.top-logo').css({
		'opacity': (((height/2) - scrollTop) / height)
	});
	if (scrollTop == 0){
		$('.top-logo').css({
			'opacity': 1
		});
	}
});

function adaptLandingDiv() {
	var h  = $(window).height();
	$('#home-slider').css({'height': h + 'px'});
}

window.onresize = function(event) {
	adaptLandingDiv();
}

//get  viewport height for landing page
	adaptLandingDiv();


//effect on landing page sky bg

$(window).scroll(function() {
	var scrollPercent = Math.round(($(window).scrollTop() / $('#home-slider').height()) * 100)+10;

	$('#home-slider').attr('data-philter-grayscale', scrollPercent);
	$('.logo-title').attr('data-philter-blur', scrollPercent-10);
	$.philter();

});

$('#mac-contact, #outlook-contact, #thunderbird-contact').css( 'cursor', 'pointer' );
//download contact
$("#mac-contact").click(function(e) {
    e.preventDefault();
    window.location.href = '../ressources/Graphmatic.vcf';
});
$("#outlook-contact").click(function(e) {
    e.preventDefault();
    window.location.href = '../ressources/Graphmatic.csv';
});
$("#thunderbird-contact").click(function(e) {
    e.preventDefault();
    window.location.href = '../ressources/Graphmatic.ldif.zip';
});