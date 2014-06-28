
jQuery(document).ready(function($) {

	// Add Email through Javascript to prevent scraping
	$('.email-link').attr('href', 'nike.sandell@gmail.com').text('nike.sandell@gmail.com');

	$("h1").fitText(1, { minFontSize: '45px', maxFontSize: '96px' });

	// Test for WebP support (for bg img)
	testWebP(function(support) {
		if(support) {
			$('body').addClass('webp');
		}
	});

	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	};

});