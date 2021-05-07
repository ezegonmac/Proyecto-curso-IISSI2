"use strict";

import { photoValidator } from "/js/validators/photos.js";

function main() {
	let form = document.querySelector("#form");

	form.onsubmit = handleSubmitForm;
}

function handleSubmitForm() {}

// VALIDATORS

function handleSubmitForm(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	let errors = photoValidator.validateNewComment(formData);

	/* Show errors in doc */
	if (errors.length > 0) {
		let errorsDiv = document.querySelector("#errors-new-com");
		errorsDiv.innerHTML = "";
		for (let error of errors) {
			messageRenderer.showErrorMessage(error);
		}
	}
}

document.addEventListener("DOMContentLoaded", main);
