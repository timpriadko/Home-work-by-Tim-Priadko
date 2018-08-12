function isotope_init() {
	var $grid = $('.grid').isotope({
		 // options
		 itemSelector: '.grid-item',
		 layoutMode: 'fitRows'
	});

	$('.filter-button-group').on('click', 'button', function(){
		$('.is-checked')[0].classList.remove('is-checked');
		$(this)[0].classList.add('is-checked');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter: filterValue});
})
}

function carousel_init () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
	});
}

function to_top(){
	var btn = $('.totop-button');
		$(window).scroll(function(){
			if ($(window).scrollTop() > 300){
				btn.addClass('show');
			}
			else{
				btn.removeClass('show');
			}
		});

		btn.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop:0}, '300');
			});
}

function initMap() {
  // The location of Uluru
  var uluru = {lat: 47.5716, lng: 33.2522};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 4, 
      	center: uluru,
      	styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]
      });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


// Map overlay script
function mapOverlayHidden(){
	var mapTitle = $('.map-title'),
		mapOverlay = $('.map-overlay'),
		sectionMap = $('.map-section');

		mapTitle.click(function(){
			mapOverlay.addClass('hidden');
		});

		$(document).click(function(e){
			if ((mapTitle.has(e.target).length === 0) && (sectionMap.has(e.target).length !== 1)){
				mapOverlay.removeClass('hidden');
			};
		});
}

$(document).ready(function(){
	isotope_init();
	carousel_init();
	to_top();
	mapOverlayHidden();
});