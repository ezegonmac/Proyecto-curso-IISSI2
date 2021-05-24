"use strict";

import { photoValidator } from "/js/validators/photos.js";
import { photosAPI } from "/js/api/photos.js";

function main() {
	let form = document.querySelector("#form");

	form.onsubmit = handleSubmitForm;
}

// BUTTONS

// - post button
// function renderPostBtn() {
// 	let btn = document.querySelector("#post-button");
// 	let form = document.querySelector("#form");
// 	btn.onclick = function () {
// 		form.submit();
// 	};
// }

// VALIDATORS

function handleSubmitForm(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	// TODO  Add the current user ID
	formData.append("userId", 1);
	//console.log(formData.forEach((v) => console.log(v)));
	photosAPI
		.create(formData)
		.then((data) => {
			window.location.assign("/feed_logged.html");
		})
		.catch((error) => console.error(error));

	// let errors = photoValidator.validateNewComment(formData);

	// /* Show errors in doc */
	// if (errors.length > 0) {
	// 	let errorsDiv = document.querySelector("#errors-new-com");
	// 	errorsDiv.innerHTML = "";
	// 	for (let error of errors) {
	// 		messageRenderer.showErrorMessage(error);
	// 	}
	// }
}

document.addEventListener("DOMContentLoaded", main);
