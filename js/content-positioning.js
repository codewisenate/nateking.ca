// CACHE SECTION CONTENT
var section01 = $('#section-01-content'),
	section02 = $('#section-02-content'),
	section03 = $('#section-03-content'),
	section04 = $('#section-04-content'),
	section05 = $('#section-05-content'),
	section06 = $('#section-06-content'),
	section07 = $('#section-07-content'),
	section08 = $('#section-08-content');

	/* SECTION ONE - I'm an Internet professional: Particles & gradient */
	/* SECTION TWO - I lead from the front: Horse */
	/* SECTION THREE - I can create: Moon */
	/* SECTION FOUR - I'm also a team player: Card switcher */
	/* SECTION FIVE - I know a few things: Arrow Bubble */
	/* SECTION SIX - And have a lot of experience: Slider */
	/* SECTION SEVEN - But it's time for something new: Clock */
	/* SECTION EIGHT - So send me a message: Paper airplane */

function adjustContentLayout(screen) {
	console.log('adjustContentLayout called', screen);
	switch(screen) {
		case 'smartphone':
			collapseBadge();
			$(section01, this).positionContent('#section-01', 'left', 'middle', '-20', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '-20', '40');
			$(section03, this).positionContent('#section-03', 'center', 'bottom', '-20', '0');
			$(section04, this).positionContent('#section-04', 'left', 'top', '-20', '20');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '-20', '4', 'px', '%');
			$(section06, this).positionContent('#section-06', 'left', 'top', '0', '-20');
			$(section07, this).positionContent('#section-07', 'left', 'bottom', '-20', '0');
$(section08, this).positionContent('#section-08', 'left', 'bottom', '-20', '0');
			break;
		case 'smartphone-wide':
			collapseBadge();
			$(section01, this).positionContent('#section-01', 'right', 'middle', '40', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '20', '0');
			$(section03, this).positionContent('#section-03', 'right', 'top', '-70', '0');
			$(section04, this).positionContent('#section-04', 'left', 'top', '20', '-70');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '-20', '-9', 'px', '%');
			$(section06, this).positionContent('#section-06', 'center', 'top', '0', '-100', 'px', 'px');
			$(section07, this).positionContent('#section-07', 'center', 'left', '-50', '0');
$(section08, this).positionContent('#section-08', 'left', 'bottom', '350', '25', 'px', '%');
			break;
		case 'tablet-narrow':
			collapseBadge();
			$(section01, this).positionContent('#section-01', 'right', 'middle', '40', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '-50', '0');
			$(section03, this).positionContent('#section-03', 'center', 'bottom', '0', '0');
			$(section04, this).positionContent('#section-04', 'right', 'top', '200', '-70');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '-50', '-50');
			$(section06, this).positionContent('#section-06', 'center', 'top', '0', '0');
			$(section07, this).positionContent('#section-07', 'center', 'middle', '0', '0');
$(section08, this).positionContent('#section-08', 'left', 'bottom', '350', '25', 'px', '%');
			break;
		case 'tablet-wide':
			$(section01, this).positionContent('#section-01', 'right', 'middle', '40', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '200', '0');
			$(section03, this).positionContent('#section-03', 'center', 'bottom', '0', '0');
			$(section04, this).positionContent('#section-04', 'right', 'top', '300', '70');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '0', '10', 'px', '%');
			$(section06, this).positionContent('#section-06', 'center', 'top', '0', '0');
			$(section07, this).positionContent('#section-07', 'center', 'middle', '0', '-60');
			$(section08, this).positionContent('#section-08', 'center', 'middle', '0', '0');
			break;
		case 'desktop':
			$(section01, this).positionContent('#section-01', 'right', 'middle', '40', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '200', '0');
			$(section03, this).positionContent('#section-03', 'center', 'middle', '0', '0');
			$(section04, this).positionContent('#section-04', 'right', 'top', '300', '70');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '0', '10', 'px', '%');
			$(section06, this).positionContent('#section-06', 'center', 'middle', '0', '0');
			$(section07, this).positionContent('#section-07', 'center', 'middle', '-60', '-40');
			$(section08, this).positionContent('#section-08', 'right', 'bottom', '350', '0', 'px', '%');
			break;
		case 'wide':
			$(section01, this).positionContent('#section-01', 'right', 'middle', '40', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '300', '0');
			$(section03, this).positionContent('#section-03', 'center', 'middle', '0', '0');
			$(section04, this).positionContent('#section-04', 'right', 'middle', '500', '0');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '0', '10', 'px', '%');
			$(section06, this).positionContent('#section-06', 'center', 'middle', '0', '0');
			$(section07, this).positionContent('#section-07', 'center', 'middle', '-100', '-40');
			$(section08, this).positionContent('#section-08', 'right', 'bottom', '350', '5', 'px', '%');
			break;
		case 'ultra-wide':
			$(section01, this).positionContent('#section-01', 'right', 'middle', '40', '0');
			$(section02, this).positionContent('#section-02', 'left', 'middle', '300', '0');
			$(section03, this).positionContent('#section-03', 'center', 'middle', '0', '0');
			$(section04, this).positionContent('#section-04', 'right', 'middle', '500', '0');
			$(section05, this).positionContent('#section-05', 'center', 'bottom', '0', '10', 'px', '%');
			$(section06, this).positionContent('#section-06', 'center', 'middle', '0', '0');
			$(section07, this).positionContent('#section-07', 'center', 'middle', '-160', '0');
			$(section08, this).positionContent('#section-08', 'right', 'bottom', '350', '10', 'px', '%');
			break;
		default:
			break;
	}
}


// CREATE CENTER FUNCTION FOR SECTION CONTENT PLACEMENT
// call $(element).positionContent('.parentClass or #parentId', 'left/right/center', 'top/bottom/center', 'horizontal value in pixels', 'vertical value in pixels')
jQuery.fn.positionContent = function (parent, horizontalAlign, verticalAlign, hOffset, vOffset, hUnit, vUnit, important) {
	var hUnits, vUnits;
// console.log('hOffset: ', hOffset);
// console.log('vOffset: ', vOffset);

	if (hOffset === undefined) { hOffset = '0'; } else { hOffset = parseInt(hOffset, 10); }
	if (vOffset === undefined) { vOffset = '0'; } else { vOffset = parseInt(vOffset, 10); }
	if (hUnit === undefined) { hUnits = 'px'; } else { hUnits = hUnit; }
	if (vUnit === undefined) { vUnits = 'px'; } else { vUnits = vUnit; }

	this.css('position','absolute');

	if (verticalAlign == 'middle') {
// console.log($(parent).attr('id'), $(parent).height()/2);
// console.log($(this).attr('id'), $(this).height()/2);
		this.css('top', (((($(parent).height() / 2) - ($(this).height() / 2)) * 1.1) + vOffset) + vUnits);

		this.css({'bottom':'auto'});
	} else {
		this.css(verticalAlign, (vOffset * 1) + vUnits);
console.log((vOffset * 1) + vUnits);
		if (verticalAlign == 'top') {
			this.css({'bottom':'auto'});
		} else {
			this.css({'top':'auto'});
		}
	}
// console.log(hOffset + hUnits);
	if (horizontalAlign == 'center') {
		this.css('left', (($(parent).width() / 2) - ($(this).width() / 2) + hOffset + $(window).scrollLeft()) + hUnits);
		this.css({'right':'auto'});
	} else {
		this.css(horizontalAlign, (hOffset * 1) + hUnits);
console.log((hOffset * 1) + hUnits);
		if (horizontalAlign == 'left') {
			this.css({'right':'auto'});
		} else {
			this.css({'left':'auto'});
		}
	}
	this.css('opacity','1');
	return this;
}
