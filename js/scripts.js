var i = Math.floor(Math.random() * 8);
var initI = i++;

$(document).ready(function () {

	// UPDATE Gradient
	setInterval(updateGradient, 10);

	// REWRITE Button Label
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var dow = new Date().getDay();
	var today = days[dow];

	var S = new Date().getSeconds() * 360 / 60;
	var M = new Date().getMinutes() * 360 / 60;
	var H = new Date().getHours() * 360 / 12;
	var Hoffset = new Date().getMinutes() / 2;
	$('#clock .ss').css({ 'transform': 'rotate(' + S + 'deg', '-webkit-transform': 'rotate(' + S + 'deg' });
	$('#clock .mm').css({ 'transform': 'rotate(' + M + 'deg', '-webkit-transform': 'rotate(' + M + 'deg' });
	$('#clock .hh').css({ 'transform': 'rotate(' + (H + Hoffset) + 'deg', '-webkit-transform': 'rotate(' + (H + Hoffset) + 'deg' });

	// MANAGE MOON BUBBLE
	$('#inspirationBtn').html('Some ' + today + ' Inspiration');
	var url = '#';

	$('#inspirationBtn').on('click', function () {
		if (url === '#') {
			$('#moon').empty().append('<img src="/images/moon-01.png" /><iframe id="jfk-moon" width="640" height="400" src="#" frameborder="0" allowfullscreen></iframe>');
			url = 'https://www.youtube.com/embed/th5A6ZQ28pE?autoplay=1&rel=0';
			$('#jfk-moon').attr('src', url);
			$('#inspirationBtn').html('I\'m finished, bring back the moon...');
		} else {
			url = '#';
			$('#jfk-moon').attr('src', url);
			$('#moon').empty().append('<img src="/images/moon-01.png" />');
			$('#inspirationBtn').html('Some ' + today + ' Inspiration');
		}
	});

	// MANAGE COLLABORATION BUBBLE
	// var i = Math.floor(Math.random() * 9);
	//console.log('random seed: ', i);
	initI++;
	// if (collaborators[i][0] == undefined) { i == 0; }
	// $('.front').html(collaborators[0][0]).css({'background':'white url(/images/collaboration-0.png) center center no-repeat','background-size':'contain'});
	// $('#collaboration').html(collaborators[0][1]);
	$('.back').html(collaborators[i][0]).css({ 'background': 'white url(/images/collaboration-' + i + '.png) center center no-repeat', 'background-size': 'contain' });
	$('h4 #collaborator-names').text(collaborators[i][0]);
	$('#collaboration').html(collaborators[i][1]);
	$('.card').on('click', function () {
		$('.front').fadeOut(0).html(collaborators[i][0]).fadeIn(1).css({ 'background': 'white url(/images/collaboration-' + i + '.png) center center no-repeat', 'background-size': 'contain' });
		$('#collaboration').html(collaborators[i][1]);
		$('h4 #collaborator-names').text(collaborators[i][0]);
		i = checkIncrement(i);
		// console.log('i: ', i);

	}, function () {
		$('.back').fadeOut(0).html(collaborators[initI][0]).fadeIn(1).css({ 'background': 'white url(/images/collaboration-' + initI + '.png) center center no-repeat', 'background-size': 'contain' });
		$('#collaboration').html(collaborators[initI][1]);
		$('h4 #collaborator-names').text(collaborators[initI][0]);
		initI = checkIncrement(i);
		i = initI;
		// console.log('initI: ', i);
	});

	function checkIncrement(i) {
		if (i == collaborators.length - 1) { i = 0; }
		else { i = i + 1; }
		return i;
	}


	// MANAGE WAYPOINTS
	var showHideBadge = new Waypoint.Inview({
		element: $('#section-02-content p'),
		enter: function (direction) {
			if (direction === 'down') {
				collapseBadge();
			}
		},
		entered: function (direction) {

		},
		exit: function (direction) {

		},
		exited: function (direction) {
			// console.log(breakpointWidthValue);
			if (direction === 'up' && breakpointWidthValue >= 900) {
				enlargeBadge(false);
			}
		}
	});

});


// MANAGE BREAKPOINTS
var breakpoint = {};
var breakpointWidth = {};
var breakpointValue, breakpointWidthValue;

breakpoint.refreshValue = function () {
	this.value = window.getComputedStyle(
		document.querySelector('body'), ':before'
	).getPropertyValue('content').replace(/\"/g, '');
};
breakpointWidth.refreshValue = function () {
	this.value = window.getComputedStyle(
		document.querySelector('body'), ':before'
	).getPropertyValue('min-width');
};


// MANAGE EVENTS AFTER LOAD
$(window).on("load", function () {
	breakpoint.refreshValue();
	breakpointWidth.refreshValue();
	breakpointValue = breakpoint.value;
	breakpointWidthValue = parseInt(breakpointWidth.value, 10);

	// console.log('Body class: ', breakpoint.value);
	// console.log('View size: ', parseInt(breakpointWidthValue, 10));


	// MANAGE SLIDER
	$('.my-slider').slick({
		accessibility: true,
		adaptiveHeight: true,
		arrows: true,
		cssEase: 'ease-in-out',
		dots: true,
		draggable: true,
		responsive: true,
		infinite: true,
		speed: 400
	});

	adjustContentLayout(breakpoint.value);

	// UPDATE BADGE BOX
	$('.small-state #profile-pic').click(function () {
		enlargeBadge(true);
	});


});


// MANAGE EVENTS AFTER WINDOW RESIZE
$(window).resize(function () {
	breakpoint.refreshValue();
	breakpointWidth.refreshValue();
	breakpointValue = breakpoint.value;
	breakpointWidthValue = parseInt(breakpointWidth.value, 10);

	$('body').attr('class', '').addClass(breakpoint.value);

	// console.log('Body class: ', breakpoint.value);
	// console.log('View size: ', parseInt(breakpointWidthValue, 10));

	adjustContentLayout(breakpoint.value);

}).resize();

/* GLOBAL FUNCTIONS */

// MANAGE BADGE
function enlargeBadge(clicked) {
	if (clicked) {
		var doCollapse = setTimeout(function () {
			collapseBadge();
		}, 3500);
	}
	$('.badge-box').show(300);
	$('#badge-icon').removeClass('small-state');
	if (breakpointWidthValue >= 900) {
		$('#badge-icon').css({ 'top': '60px', 'left': '75px', 'z-index': '9999' });
	} else {
		$('#badge-icon').css({ 'top': '10px', 'left': '25px', 'z-index': '9999' });
	}
	$('#badge-icon img').css({ 'width': '94px', 'filter': 'none', 'border': 'none', 'opacity': '1' });
}

function collapseBadge() {
	$('.badge-box').hide(300);
	$('#badge-icon').addClass('small-state');
	$('#badge-icon').css({ 'top': '0px', 'left': '20px', 'z-index': '99999', 'position': 'fixed' });
	$('#badge-icon img').css({ 'width': '50px', 'filter': 'grayscale(100%)', 'border': '3px solid #fff', 'opacity': '0.6' });
	var smallBadge = $('#badge-icon.small-state');
	smallBadge.on('click', function () {
		enlargeBadge(true);
	})
}

// MANAGE GRADIENT
var colors = new Array(
	[62, 35, 255],
	[60, 255, 60],
	[255, 35, 98],
	[45, 175, 230],
	[255, 0, 255],
	[255, 128, 0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

	if ($ === undefined) return;

	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

	$('.gradient-container').css({
		background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
	}).css({
		background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
	});

	step += gradientSpeed;
	if (step >= 1) {
		step %= 1;
		colorIndices[0] = colorIndices[1];
		colorIndices[2] = colorIndices[3];

		//pick two new target color indices
		//do not pick the same as the current one
		colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
		colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
	}
}
