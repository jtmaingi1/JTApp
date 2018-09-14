/* global $, alert, console*/

/* ---------------------------------------------------
Template Name: Marqa
Description: Responsive HTML5 / CSS3 One-Page Portfolio-Resume Template
Version: 1.3
Author: Ahmed Beheiry 
URL: https://themeforest.net/user/ahmedbeheiry

/* ---------------------------------------------------
	*** Table Of Content:
-----------------------------------------------------
1 - Preloader Page
2 - Launching and adjusting NiceScroll plugin 
3 - Move to About section on clicking mouse icon
4 - Adjusting the top nav Visibility 
5 - Adjusting Side Menu showing / hiding 
6 - Scroll Percentage
7 - Accordion in About-me Section
8 - Back To Top Button
9 - Animating Numbers at Fun-Facts Section
10 - Easy Pie Chart in Skills Section
11 - MixItUp Plugin in Portfolio Section
12 - Owl Carousel in Testimonials Section
13 - Owl Carousel in Partners Section
14 - Contact Form Validation
15 - Launching Google map
----------------------------------------------------- */

(function($) {
	"use strict";

	/* ---------------------------------------------------
		1 - Loading Page 
	----------------------------------------------------- */
	$(window).on("load", function() {
		$(".preloader").delay(400).fadeOut(600);
	});

	/* ---------------------------------------------------
		2 - Launching and adjusting NiceScroll plugin 
	----------------------------------------------------- */
	$("html, body").niceScroll({
		scrollspeed: 40,
		mousescrollstep: 30,
		zindex: 9999,
		cursorwidth: 10,
		cursorborder: false,
		cursorborderradius: 0,
		cursorcolor: "#111"
	});

	/* ---------------------------------------------------
		3 - Move to About section on clicking mouse icon 
	----------------------------------------------------- */
	$("#mouse").on("click", function() {
		$("html, body").animate({
			scrollTop: $("#about-me").offset().top
		}, 1000);
	});

	/* ---------------------------------------------------
		4 - Adjusting the top nav Visibility 
	----------------------------------------------------- */
	// the top nav get visible when scrolling >= 600
	$(window).on("scroll", function() {
		$("#top-nav, #menu").addClass("transition");
		if ($(this).scrollTop() >= 600) {
			$("#top-nav, #menu").addClass("shown");
		} else {
			$("#top-nav, #menu").removeClass("shown");
		}
	});

	/* ---------------------------------------------------
		5 - Adjusting Side Menu showing / hiding 
	----------------------------------------------------- */
	// When clicking on the menu button
	var menuBtn = $("#menu"),
		sideMenu = $("#side-menu");
	menuBtn.on("click", function() {
		$(this).toggleClass("active-menu");
		sideMenu.toggleClass("active-side-menu").children("a").removeClass("selected-item");
	});

	// some styles on menu item when clicked 
	$("#side-menu a").on("click", function() {
		$(this).addClass("selected-item").siblings().removeClass("selected-item");
		menuBtn.toggleClass("active-menu");
		sideMenu.toggleClass("active-side-menu");
	});

	// Move to Specific Section after clicking its link in the menu
	$("a[href^='#']").on("click", function(event) {
		var target = $($(this).attr("href"));
		if (target.length) {
			event.preventDefault();
			$("html, body").animate({
				scrollTop: target.offset().top
			}, 1500);
		}
	});

	/* ---------------------------------------------------
		6 - Scroll Percentage
	----------------------------------------------------- */
	var scrollTimer = null;
	$(window).on("scroll", function() {
		var viewportHeight = $(this).height(),
			scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
			progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
			distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $("#scroll").height() / 2;
		$("#scroll")
			.css("top", distance)
			.text(" (" + Math.round(progress * 100) + "%)")
			.fadeIn(100);

		if (scrollTimer !== null) {
			clearTimeout(scrollTimer);
		}
		scrollTimer = setTimeout(function() {
			$("#scroll").fadeOut();
		}, 800);
	});

	/* ---------------------------------------------------
		7 - Accordion in About-me Section 
	----------------------------------------------------- */
	$(".acc-title").on("click", function() {
		$(".acc-title").not(this).removeClass("active");
		$(this).toggleClass("active");
		$(this).siblings(".acc-content").slideToggle(350);
		$(".acc-title").not(this).siblings(".acc-content").slideUp(300);
	});

	/* ---------------------------------------------------
		8 - Back To Top Button
	----------------------------------------------------- */
	// showing the button when scroll > 400 
	var backToTop = $(".back-to-top");
	$(window).on("scroll", function() {
		if ($(this).scrollTop() >= 400) {
			backToTop.addClass("show-button");
		} else {
			backToTop.removeClass("show-button");
		}
	});

	// back to top on clicking the button
	backToTop.on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1200);
	});

	/* ---------------------------------------------------
		9 - Animating Numbers at Fun-Facts Section 
	----------------------------------------------------- */
	$("#facts").appear(function() {
		$("#number_1").animateNumber({
			number: 6853	// Change to your number			
		}, 2200);
		$("#number_2").animateNumber({
			number: 120		// Change to your number	
		}, 2200);
		$("#number_3").animateNumber({
			number: 345		// Change to your number
		}, 2200);
		$("#number_4").animateNumber({
			number: 195		// Change to your number
		}, 2200);
	}, {
		accX: 0,
		accY: -150
	});

	/* ---------------------------------------------------
		10 - Easy Pie Chart in Skills Section
	----------------------------------------------------- */
	$("#skills").appear(function() {
		$(".chart").easyPieChart({
			barColor: "#eaeaea",
			trackColor: false,
			scaleColor: false,
			lineWidth: 10,
			lineCap: "round",
			size: 150,
			animate: 1500
		});

		// start numbers animate at skills section //
		$("#chart_num_1").animateNumber({
			number: 88		// Change to your number
		}, 1500);
		$("#chart_num_2").animateNumber({
			number: 95		// Change to your number
		}, 1500);
		$("#chart_num_3").animateNumber({
			number: 73		// Change to your number
		}, 1500);
		$("#chart_num_4").animateNumber({
			number: 55		// Change to your number
		}, 1500);
	}, {
		accX: 0,
		accY: -150
	});

	/* ---------------------------------------------------
		11 - MixItUp Plugin in Portfolio Section
	----------------------------------------------------- */
	$("#Container").mixItUp();

	/* ---------------------------------------------------
		12 - Owl Carousel in Testimonials Section
	----------------------------------------------------- */
	$(".test-owl").owlCarousel({
		loop: true,
		responsiveClass: true,
		margin: 10,
		nav: false,
		dots: false,
		dotsEach: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	/* ---------------------------------------------------
		13 - Owl Carousel in Partners Section
	----------------------------------------------------- */
	$(".partners-owl-carousel").owlCarousel({
		loop: true,
		responsiveClass: true,
		margin: 10,
		nav: false,
		dots: false,
		dotsEach: false,
		autoplay: true,
		autoplayTimeout: 1500,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});

	/* ---------------------------------------------------
		14 - Contact Form Validation
	----------------------------------------------------- */
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});

	var contactForm = $("#contact-form"),
		submitBtn = $(".submit-btn"),
		formResponse = $(".form-response");
	contactForm.validator().on("submit", function (e) {
			if(e.isDefaultPrevented()) {
				formResponse.text("Sorry, you didn't fill the form.").fadeIn(1000);
			} else {
				e.preventDefault();
				submitForm();
			}
		});
		// Submit Form
		function submitForm() {
			// Some Variables
			var name = $("#name").val(),
				mail = $("#mail").val(),
				message = $("#message").val();
			// Ajax    
			$.ajax({
				type: "POST",
				_url: $(contactForm).attr('action'),

				data: "name=" + name + "&mail=" + mail + "&message=" + message,
				beforeSend: function(text) {
					submitBtn.html("Sending...");
					formResponse.fadeOut(200).text("");
				 },
					success: function (text) {
						if(text == "success") {
							contactForm[0].reset();
							formResponse.text("Thanks! Your message sent correctly.").fadeIn(1000);
							submitBtn.html("Send Message");
						} else {
							formResponse.text(text).fadeIn(1000);
						}
					}
			})
			.done(function(response) {
				// Make sure that the formMessages div has the 'success' class.
				$(formResponse).removeClass('error');
				$(formResponse).addClass('success');
	
				// Set the message text.
				$(formResponse).text(response);
	
				// Clear the form.
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
			})
			.fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formResponse).removeClass('success');
				$(formResponse).addClass('error');
	
				// Set the message text.
				if (data.responseText !== '') {
					$(formResponse).text(data.responseText);
				} else {
					$(formResponse).text('Oops! An error occured and your message could not be sent.');
				}
			})
			;
		}

	// Moving placeholder on focus on any input in contact-me section //
	$(".contact .form-control").focusout(function() {
		var textValue = $(this).val();
		if (textValue === "") {
			$(this).removeClass("has-value");
		} else {
			$(this).addClass("has-value");
		}
	});
})(jQuery);

/* ---------------------------------------------------
	15 - Launching Google map
----------------------------------------------------- */
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 17,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(30.609788, 32.268555),	// Change to your latitude & longitude

		scrollwheel: false,

		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [{
				"saturation": 36
			}, {
				"color": "#000000"
			}, {
				"lightness": 40
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"lightness": 16
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}, {
				"weight": 1.2
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 21
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 29
			}, {
				"weight": 0.2
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 18
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 16
			}]
		}, {
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 19
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}]
		}]
	};

	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById("map");

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let"s also add a marker while we"re at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(30.609788, 32.268555),	// Change to your latitude & longitude
		/* animation:google.maps.Animation.BOUNCE, Make the marker bounce */
		map: map,
		title: "Jeff Maingi"		// Change to your text
	});

	var infowindow = new google.maps.InfoWindow({
		content: "Jeff Maingi"		// Change to your text
	});

	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}