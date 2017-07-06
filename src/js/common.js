$(document).ready(function() {

	// $(document).on('click', function (e) {
	// 	console.log(e.target);
	// });


	//index.html
	// enter text in input show block
	$('.js-showVariant').each(function() {
		var $that = $(this);
		var $inp = $(this).find('input');

		$inp.on('change paste keyup', function () {
			if($inp.val().length > 2){
				// console.log($(this).attr('class'));
				$that.addClass('is_shown');
				$that.next('.variant').addClass('is_shown');
			} else {
				$that.removeClass('is_shown');
				$that.next('.variant').removeClass('is_shown');
			}
		});
	});

	// --------------
	$('.mod_heart span, .mod_heart_big span, .js-toggle-text').on('click', function() {
		var nextText = $(this).data('toggleText');
		var startText = $(this).data('startText');

		if($(this).hasClass('is-checked')){
			$(this).removeClass('is-checked').text(startText);

		} else if($(this).hasClass('is_disable') || $(this).parent().hasClass('is_disable')) {
			return false;
		} else {
			$(this).addClass('is-checked').text(nextText);
		}
	});

	// ----------------

	$('.curtail input').change( function() {
		var curt  = $(this).parents('.curtail').parents('.check');
		var self = $(this);

		var sList = '';
		$('.curtail input').each(function () {
			var sThisVal = (this.checked ? '1' : '0');
			sList += (sList=='' ? sThisVal :  sThisVal);
			sList = parseInt(sList);
		});

		if(sList == 0){
			curt.removeClass('has_checked');
			$('.has_curtail').removeClass('has_checked');
		} else {
				curt.addClass('has_checked');
				$('.has_curtail').addClass('has_checked');
			}

	});
	// e_tov_subcategory.html   - - aside check el show
	$('.check').on('click', function() {
		if($(this).children('input').is(':checked')){
			$('.gotcha').removeClass('is_active');
			$(this).find('.gotcha').toggleClass('is_active');
		} else {
			$('.gotcha').removeClass('is_active');
		}
	});

	// ----------------------

	// if($('[data-fancybox]').length) {
	// 	$('[data-fancybox]').fancybox({
	// 		buttons: {
	// 			position : 'center'
	// 		}
	// 	});
	// }

	// ---------------------

	$('.data__social_btn, .pharmacy__delivery span').on('click', function() {
		var nextText = $(this).data('toggleText');
		var startText = $(this).data('startText');
		if ($(this).hasClass('is_disable') || $(this).parent().hasClass('is_disabled')) {
			$(this).parents('.data__social_item, .pharmacy__delivery').removeClass('is_active'); // for e_oformlenie_step_2.html
			return false;
		} else {
			$(this).parents('.data__social_item, .pharmacy__delivery').toggleClass('is_active');
		}
		if($(this).parents('.data__social_item, .pharmacy__delivery').hasClass('is_active')){
			$(this).text(startText);
		} else {
			$(this).text(nextText);
		}

	});

	// --   header yay-menu hover
	$('.has-yay').mouseover(
		function() {
			$(this).parents('.subMenu').addClass('is_wide');
		});

	$('.subMenu').mouseleave(function() {
		$(this).removeClass('is_wide');
	});

// header .has-sub  - mobile

	if($(window).width() < 650) {
		$('.has-menu > a').on('click', function() {return false;});
	}

	$('.box').on('click', function() {
		$(this).siblings('.box').removeClass('is_active');
		$(this).addClass('is_active');
	});

	/* --- submit form by enter.key press ---*/
	$('form').each(function() {
		$(this).find('input').keypress(function(e) {
			// Enter pressed?
			if(e.which == 13) {
				this.form.submit();
				this.form.reset();
			}
		});

	});
	/*--------------------------------------------------------------------*/

	// $('.retrieval__slider' ).slider({
	// 	range: 'min',
	// 	min: 100,
	// 	max: 4000,
	// 	value: 2000,
	// 	slide: function( event, ui ) {
	// 		$( '.retrieval__slider_range' ).val( ui.value );
	// 	}
	// });

	// $( '.retrieval__slider_range' ).val( $( '.retrieval__slider' ).slider( 'value' ) );
	// $( '.retrieval__slider_range' ).change(function() {
	// 	$( '.retrieval__slider' ).slider( 'value', $(this).val() );
	// });

	$('.retrieval__showing').on('click', function () {
		// event.preventDefault();
		// $(this).siblings().removeClass('is_active');
		// $(this).addClass('is_active');
		if($('.retrieval__showing a').eq(0).hasClass('is_active')){
			$('.retrieval__showing_spin').addClass('to-left');
	} else {
		$('.retrieval__showing_spin').removeClass('to-left');
	}

	});
	/*--------------------------------------------------------------------*/

	// $('.filterSlider').slider({
	// 	min: 0,
	// 	max: 1000,
	// 	values: [300, 900],
	// 	range: true,
	// 	stop: function( event, ui ) {
	// 		$('.filter_min').val($('.filterSlider').slider('values', 0));
	// 		$('.filter_max').val($('.filterSlider').slider('values', 1));
	// 	},
	// 	slide: function( event, ui ) {
	// 		$('.filter_min').val($('.filterSlider').slider('values', 0));
	// 		$('.filter_max').val($('.filterSlider').slider('values', 1));
	// 	}
	// });

	$('.filter_min').change(function() {

		var value1 = $('.filter_min').val();
		var value2 = $('.filter_max').val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$('.filter_min').val(value1);
		}
		$('.filterSlider').slider('values', 0, value1);
	});

	$('.filter_max').change(function() {

		var value1 = $('.filter_min').val();
		var value2 = $('.filter_max').val();
		console.log(value2);

		if (value2 > 1000) {
			value2 = 1000;
			$('.filter_max').val(1000);
		}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$('.filter_max').val(value2);
		}
		$('.filterSlider').slider('values', 1, value2);
	});

	// -----------------------------
	$('.retrieval__title').on('click', function(e) {
		e.preventDefault();
		$('.retrieval__opening' ).toggleClass('is_opened');
		$(this).next('.opening').toggleClass('is_opened');
	});

	$(document).on('click', function(el){
		var childr = $('.retrieval__opening').find('*');

		if($(el.target).is(childr) == false ){
			$('.retrieval__opening, .opening').removeClass('is_opened');
		}

	});

	/*--------------------------------------------------------------------*/


	/*--------------------------------------------------------------------*/

	$('.assortment__box .expectancy').slideUp('400');

	$('.assortment__content').on('click', function (e) {
		// e.preventDefault();

		if($(this).parent().hasClass('is_active')){
			$(this).parent().removeClass('is_active');
			$('.expectancy').slideUp('400');
		} else {
			$('.expectancy').slideUp('400');
			$('.assortment__item').removeClass('is_active');
			$(this).parent().addClass('is_active').next('.expectancy').slideDown('400');
		}

	});

	/* --- close something ---*/
	$('.js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).slideUp().removeClass('is_active');
		$('.popup, .popup__window, .popup__overlay').slideUp().removeClass('is_active');

		return false;
	});

	/*--------------------------------------------------------------------*/
	/* --- close something closest ---*/
	$('.js-close-closest').on('click', function() {
		var closeItem = $(this).data('close');

		$(this).closest('.' + closeItem).hide();
		$('.overlay').removeClass('is_active');

		return false;
	});
	/*--------------------------------------------------------------------*/

	/* --- toggler something ---*/
	$('.js-toggler').on('click', function(e) {
		e.preventDefault();
		var togglerItem = $(this).data('toggler');

		if($(this).hasClass('is_active')){
			$(this).siblings().removeClass('is_active');
			// return false;
		} else {
			$('.js-toggler').removeClass('is_active');
			$('.toggler').slideUp('200').removeClass('is_active');
			$('.' + togglerItem).slideDown('400').addClass('is_active');
			$(this).addClass('is_active');

		}

	});
	/*--------------------------------------------------------------------*/
	/* --- aside close in mobile ---*/
	$('.js-close-aside-mob').on('click', function() {
		$('.js-toggle-mob, .js-toggler').removeClass('is_active').css({
			'display' : ''
		});
	} );
	/*--------------------------------------------------------------------*/

	$('.picture_small').on('click', function(event){
		event.preventDefault();
		$(this).siblings('.picture_small').removeClass('is_active');
		var thisSrc = $(this).addClass('is_active').children('img').attr('src');

		$(this).parents('.picture').find('.picture_big').children('img').attr('src', thisSrc);
	});

	$('.js-limit').on('click', function() {
		$(this).toggleClass('is_open');
		$(this).parent().find('.js-limit-close').slideToggle('400');
		return false;
	});

	// $('.js-limit-close').on('click', function() {
	// 	$(this).parents('.section__inner').find('.js-limit').toggleClass('is_open');
	// 	$(this).parent('.hash').toggleClass('is_open');
	// 	return false;
	// });



	$('.service__link').on('click', function() {
		var nextText = $(this).children('span').data('toggleText');
		var startText = $(this).children('span').data('startText');

		if($(this).hasClass('is_disable')){
			$(this).removeClass('is_active');
		} else {
			$(this).toggleClass('is_active');
			if($(this).hasClass('is_active')){
				$(this).children('span').text(nextText);
			} else {
				$(this).children('span').text(startText);
			}
		}
	});

	$('.js-detectUserData').on('click', function(event) {
		var checkInp = $('.retrieval__input');
		var pge = $(this).attr('href');
		var detect = 1;

		for (var i = checkInp.length - 1; i >= 0; i--) {
			if(checkInp.eq(i).val().length < 3){
				checkInp.eq(i).addClass('has-error');
				detect = 0;
			}
			detect = detect * 1;
		}
		if(detect == 0){
			event.preventDefault();
		}
	});


	$('[data-show]').on('click', function(event) {
		event.preventDefault();

		var $data = $('[data-show]');
		$thisItem = $(this).data('show');
		$data.removeClass('is_active');
		$(this).addClass('is_active');

		for (var i = $data.length - 1; i >= 0; i--) {
			var $allItems = '.' + $data.eq(i).data('show');
			$($allItems).slideUp('fast');
		}
		$( '.' + $thisItem).slideDown('400');
	});

	// slide accordion
	$('.accord__title').on('click', function() {
		$(this).parent('.accord__item').toggleClass('is_open');
		return false;
	});

	// open map popup
	$('.js-openMapAdress').on('click', function(){
		// e.preventDefault();
		// $(this).closest('.changeAdress').removeClass('is_active');
		$('.mapPopupAdress').addClass('is_active').show();
		$('.overlay').addClass('is_active');
		return false;
	});

	$('.description__form_wrap .check input').on('change', function() {
		var is_checked = false;
		if($(this).is(':checked')){
			is_checked = true;
		}

		if(is_checked) {
			$(this).parent('.check').next('.description__break').addClass('is_active');
		} else {
			$(this).parent('.check').next('.description__break').removeClass('is_active');
		}

	});

	tabAdaptive();

	// $( '.mod_date input' ).datepicker();

	$( '.mod_date input' ).on('change', function() {
		$(this).next().hide();
	});




	// scrollResize();

});//doc.ready


$(window).on('resize', function() {
	// partner header
	if($(document).width() > 800){
		$('.header__menu, .header__component, .header__component_content').css({'display' : ''});
	}

	if($(document).width() > 850){
		$('.aside__conteiner').removeClass('is_active').css({'display' : ''});
	}

	if($(document).width() >= 685){
		$('.header__component, .header__component_content').css({'display' : ''});

		$('.aside, .aside-toggler .js-toggler, .header__search').removeClass('is_active').css({
			'display' : ''
		});
	}


	var field = $('.mod_date input');
	if (field.is('.hasDatepicker')) {
		field.datepicker('hide');
	}

	// var w = $('.out').width();
	// console.log(w);
});


function tabAdaptive(){
	if($(document).width() < 800){
		$('.tab__list').on('click', function(event) {
			if($(this).has('is_active')){
				// event.preventDefault();
				$(this).siblings('.tab__list').children('.tab__link').addClass('is_shown');
			}
		});
	}
}

