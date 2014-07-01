
jQuery(document).ready(function($) {

	// Add Email through Javascript to prevent scraping
	$('.email-link').attr('href', 'mailto:nike.sandell@gmail.com').html('nike.sandell@gmail.com');


	// Header resizing
	$("h1").fitText(1, { minFontSize: '45px', maxFontSize: '96px' });


	var bgTarget = $('body'),
		bgColors = ['#13223C', '#133C3A', '#2E411D', '#47231A', '#461A34', '#1E1A46'],
		currBg = 0,
		bgSwitchInterval = 3*1000;

	// Add background transitioning if transition is supported
	if(detectCSSFeature('transition')) {
		switchBg();
		setInterval(switchBg, bgSwitchInterval);
	}

	function switchBg() {

		currBg++;
		if(!bgColors[currBg]) {
			currBg = 1;
		}

		bgTarget.css('background-color', bgColors[currBg]);

		console.log('switching to', currBg, bgColors[currBg]);
	}	

	function detectCSSFeature(featurename){
	    var feature = false,
	    domPrefixes = 'Webkit Moz ms O'.split(' '),
	    elm = document.createElement('div'),
	    featurenameCapital = null;

	    featurename = featurename.toLowerCase();

	    if( elm.style[featurename] !== undefined) { feature = true; }

	    if( feature === false ) {
	        featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
	        for( var i = 0; i < domPrefixes.length; i++ ) {
	            if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
	              feature = true;
	              break;
	            }
	        }
	    }
	    return feature; 
	}

});