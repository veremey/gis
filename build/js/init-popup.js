$(document).ready(function() {

	$('.popup__overlay').on('click', function () {
		if($(window).width() < 800){
			$('.header__info').removeClass('rock');
			$('.header__search').removeClass('rock');
			// $width = $(window).width() - 40;
		}

		$(this).removeClass('is_active').slideUp();
		var data = $("[data-ppp]").map(function() {
			return '.' + $(this).data("ppp");
		}).get();
		var dataList = data.join(',');
		dataArr = dataList.split(',');

		dataArr.forEach(function(item, i, arr) {
			$(item).removeClass('is_active').slideUp();
			// console.log(item); - check popups on a page
		});

		$('.popup').slideUp().removeClass('is_active');
		$('.mainForm__input').val('');
		$('.variant').removeClass('is_shown');
		$('.js_inpopup').removeClass('is_active');
		$('.mainForm, .js-open-search').removeClass('is_active');// add to js-close

		// $('.js-recall').removeClass('is_active').hide();

		$('.open-menu').removeClass('open-menu');// ??????????
	});

	// open popup
	//--------------------------------------------
	$('.js-ppp').on('click', function() {

		var data = $("[data-ppp]").map(function() {
			return '.' + $(this).data("ppp");
		}).get().join(',').split(',');

		data.forEach(function(item, i, arr) {
			$(item).removeClass('is_active').hide();
		});

		var open = $(this).data('ppp');

		$('.popup__overlay, .popup').addClass('is_active').show();
		$('.' + open).addClass('is_active').show();
		return false;
	});

	// search window whith shadow background
	//--------------------------------------------
	$('.mainForm, .js-open-search, .js-add').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 500 );
		$('.mainForm, .js-open-search').addClass('is_active');

		var that = $(this);
		var $top = $('.header .header__search').offset().top;
		var $left = $('.header .header__search').offset().left;
		var $width = $('.header .header__search').outerWidth();

		if($(window).width() < 800){
			$('.header__info').addClass('rock');
			$('.header__search').addClass('rock');
			$width = $(window).width() - 40;
		}

		$('.popup').addClass('is_active').show();
		$('.popup__overlay').addClass('is_active').show();
		$('.js_inpopup').addClass('is_active').css({
			'width' : $width
			}).offset({
				top: $top,
				left: $left
			}).find('.mainForm__input').focus();

		$(document).scroll(function () {
			$('.js_inpopup').css({
				'width' : $width
			}).offset({
				top: $top,
				left: $left
			}).find('.mainForm__input').focus();
		});

		$(window).resize(function () {
			var $top = $('.header .header__search').offset().top;
			var $left = $('.header .header__search').offset().left;
			var $width = $('.header .header__search').outerWidth();

			if($('.mainForm, .js-open-search').hasClass('is_active')){

				$('.js_inpopup').addClass('is_active').css({
					'width' : $width
				}).offset({
					top: $top,
					left: $left
				}).find('.mainForm__input').focus();
			}
		});
		return false;

	});

});//doc ready
