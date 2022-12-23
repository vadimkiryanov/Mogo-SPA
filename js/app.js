/* Обязательная конструкция jQuery, в котором пишется весь код */
$(function () {

	var header = $("#header")
	var introH = $("#intro").innerHeight(); /* Измерение высоты блока #intro */
	var scrollOffset = $(window).scrollTop();


	/* Fixed Header  */
	scheckScroll(scrollOffset);

	$(window).on("scroll", function () {

		scrollOffset = $(this).scrollTop();

		scheckScroll(scrollOffset);

	})

	/* Создание функции сравнения высоты окна и скрола */
	function scheckScroll(scrollOffset) {

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed")
		}
	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this);
		var blockId = $this.data('scroll');
		var blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$(this).addClass("active");


		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	})



});