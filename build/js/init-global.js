$(function () {

	Global_main.toggleMenu({
		container: '.selectors',
		panel: '.selector__box',
		toggler: '.selector__title',
		autoReturn: false
	});

	Global_main.trash({
		container: '.assortment__item',
		trash: '.js-remove',
		untrash: '.js-untrash',
		hideEl: '.quantity'
	});

	Global_main.trash({
		container: '.drugstore__item',
		trash: '.js-remove',
		untrash: '.js-untrash',
		hideEl: '.expectancy__content'
	});

});



// $(document).ready(function () {


// });