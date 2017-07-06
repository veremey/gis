var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var globalScope = this;

	/*--- toggle menu ---*/
	/*---------------------------------------------------------------------*/
	this.toggleMenu = function(opt) {
		var $container = $(opt.container);
		var $panel = $(opt.panel);
		var $toggler = $(opt.toggler);
		var autoReturn = opt.autoReturn;

		$(document).on('click', opt.toggler, function() {
			// e.preventDefault();

			if(!$(this).hasClass('is_active')){

				 if($(this).hasClass('is_disable')) {
						$(this).parent('.selector').removeClass('is_open');
						$toggler.removeClass('is_active');
						$panel.removeClass('is_opened');
						$(this).removeClass('is_active').next($panel).removeClass('is_opened');
						return false;
					}

				$('.selector').removeClass('is_open');
				$(this).parent('.selector').addClass('is_open');
				$toggler.removeClass('is_active');
				$panel.removeClass('is_opened');
				$(this).addClass('is_active').next($panel).addClass('is_opened');

			} else if($(this).hasClass('is_active')){

				$('.selector').removeClass('is_open');
				$(this).removeClass('is_active').next($panel).removeClass('is_opened');
			}

			return false;
		});
		// close select if click not on him or him children
		$(document).on('click', function(el){
			var childr = $('.selector').find('*');

			if($(el.target).is(childr) == false ){
				$('.selector').removeClass('is_open');
				$('.selector__title').removeClass('is_active').next('.selector__box').removeClass('is_opened');
			}
		});
	}
	/*--- trash icon click ---*/
	/*---------------------------------------------------------------------*/
	this.trash = function(opt) {
		var $container = $(opt.container);
		var $trash = $(opt.trash);
		var $untrash = $(opt.untrash);
		var $hideEl = $(opt.hideEl);

		$trash.on('click', function() {
			$(this).parents(opt.container).find(opt.hideEl).addClass('is_hide');
			$(this).addClass('in_trash')
							.parents(opt.container).addClass('is_removed').find(opt.untrash).addClass('in_trash');
			return false;
		});

		$untrash.on('click', function() {
			$(this).parents(opt.container).find(opt.hideEl).removeClass('is_hide');
			$(this).removeClass('in_trash')
							.parents(opt.container).removeClass('is_removed').find(opt.trash).removeClass('in_trash');

			return false;
		});
	}


}