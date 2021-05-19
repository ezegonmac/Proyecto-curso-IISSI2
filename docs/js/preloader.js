"use strict";

// PRELOADER

window.addEventListener("load", function () {
	let preloader = document.querySelector(".preloader");
	setTimeout(function () {
		preloader.style.display = "none";
	}, 700);
});
