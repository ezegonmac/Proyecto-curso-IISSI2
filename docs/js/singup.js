"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";

function main() {
	form.onsubmit = handleSubmitRegister;
}

let form = document.querySelector("#form");
let btn = document.querySelector("#submit-btn");

/* submit button */
btn.onClick = function () {
	console.log("jola");
	// window.open("http://localhost:8080/login.html");
};

function handleSubmitRegister(event) {
	event.preventDefault();

	alert("Form Sent!");
	let form = event.target;
	let formData = new FormData(form);

	let errors = userValidator.validateRegister(formData);

	/* Show errors in doc */
	if (errors.length > 0) {
		let errorsDiv = document.querySelector("#errors");
		errorsDiv.innerHTML = "";
		for (let error of errors) {
			messageRenderer.showErrorMessage(error);
		}
	}
}

document.addEventListener("DOMContentLoaded", main);
