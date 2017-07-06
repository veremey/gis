$(function () {

	Scroll.initScroll({
		conteiner: '.selector__conteiner'
	});

	Scroll.initScroll({
		conteiner: '.variant'
	});

	Scroll.initScroll({
		conteiner: '.picture__wrap'
	});

	Scroll.initScroll({
		conteiner: '.position__list'
	});

	Scroll.initScroll({
		conteiner: '.drugstore__places'
	});

	Scroll.initScroll({
		conteiner: '.apteki__list'
	});

	// Scroll.initScroll({
	// 	conteiner: '.yay-nav'
	// });
	Scroll.initScroll({
		conteiner: '.shemaPopup__content .order__table'
	});

});


// $(window).on("load",function(){
// 	if($(document).width() < 650 ){
// 		$('.picture__wrap').mCustomScrollbar('disable');
// 	} else if($(document).width() > 650 ) {
// 		$('.picture__wrap').mCustomScrollbar('update');
// 	}
// });



$(window).on('resize', function() {
	scrollResize();
});

function scrollResize() {
	if($(document).width() < 650 ){
			$('.picture__wrap').mCustomScrollbar('disable', true);
		} else if($(document).width() > 650 ) {
			$('.picture__wrap').mCustomScrollbar('update');
		}

	if($(document).width() < 800 ){
		if($('.drugstore__places').length){
			$('.drugstore__places').mCustomScrollbar('disable', true);
		}
		if($('.selector__conteiner').length){
			$('.selector__conteiner').mCustomScrollbar('update');
		}

	} else if($(document).width() > 800 ) {
		$('.drugstore__places').mCustomScrollbar('update');
	}

}
