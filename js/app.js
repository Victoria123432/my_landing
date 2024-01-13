$(function () {
	var header = $('#header'),
		introH = $('#intro').innerHeight(),
		scrollOffset = $(window).scrollTop()
	/*Header fixed*/
	checkScroll(scrollOffset)

	$(window).on('scroll', function () {
		scrollOffset = $(this).scrollTop()
		checkScroll(scrollOffset)
	})
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass('fixed')
		} else {
			header.removeClass('fixed')
		}
	}

	/* Smooth scroll*/
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault()

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockOffSet = $(blockId).offset().top

		$('nav a').removeClass('active')
		$this.addClass('active')

		$('html, body').animate(
			{
				scrollTop: blockOffSet,
			},
			500,
		)
	})

	/*Menu nav toggle*/

	$('#nav_toggle').on('click', function (event) {
		event.preventDefault()

		$(this).toggleClass('active')

		$('#nav').toggleClass('active')
	})
	/*Menu disappear*/
	$('nav a').on('click', function (event) {
		event.preventDefault()

		$('#nav').removeClass('active')
		$('#nav_toggle').removeClass('active')
	})

	/* Collapse*/
	$('[data-collapse]').on('click', function (event) {
		event.preventDefault()

		var $this = $(this),
			blockId = $this.data('collapse')

		$this.toggleClass('active')
	})

	/*slider*/
	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
})
