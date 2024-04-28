console.log("index.js loaded");

/* Change color flavours */
$(document).ready(function () {
	$(window).scroll(function () {
		var scrollHeight = $(this).scrollTop();
		if (scrollHeight < $(window).height()) {
			// mindre enn 100vh
			$(".flavours-nav a").css("color", "#fff");
			$(".flavours-nav h1").css("color", "#fff");
			console.log("top");
		} else if (scrollHeight < 2 * $(window).height()) {
			// mellom 100vh og 200vh
			$(".flavours-nav a").css("color", "#6A8C65");
			$(".flavours-nav h1").css("color", "#6A8C65");
			console.log("middle");
		} else if (scrollHeight < 3 * $(window).height()) {
			// mellom 200vh og 300vh
			$(".flavours-nav a").css("color", "#FFFABA");
			$(".flavours-nav h1").css("color", "#FFFABA");
			console.log("bottom");
		}
	});
});