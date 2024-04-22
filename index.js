console.log("index.js loaded");

// Navbar blir solid når du skroller forbi starten av siden
$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 1) {
			$(".navbar").addClass("solid-nav");
			console.log("solid-nav");
			//$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent\ Hvit.png'); // Endre til solidt bilde når .navbar har .solid-nav
		} else {
			$(".navbar").removeClass("solid-nav");
			console.log("no-solid-nav");

			//$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent.png'); // Endre tilbake til originalt bilde når .navbar ikke har .solid-nav
		}
	});
});

// Navbar forsvinner når du scroller ned og kommer tilbake når du scroller opp
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
};
