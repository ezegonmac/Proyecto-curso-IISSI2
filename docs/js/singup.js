"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";

function main() {
	// FORM
	let form = document.querySelector("#form");
	form.onsubmit = handleSubmitRegister;

	// RENDERERS
	renderPreviewPhoto();
}

let btn = document.querySelector("#submit-btn");

/* submit button */
btn.onClick = function () {
	// window.open("http://localhost:8080/login.html");
};

function handleSubmitRegister(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	let errors = userValidator.validateRegister(formData);

	/* Show errors in doc */
	if (errors.length == 0) {
		sendRegister(formData);
		alert("Register done!");
	} else {
		let errorsDiv = document.querySelector("errors");
		errorsDiv.innerHTML = "";
		for (let error of errors) {
			messageRenderer.showErrorMessage(error);
		}
	}
}

function sendRegister(formData) {
	authAPI
		.register(formData)
		.then((loginData) => {
			// Successful register
			let sessionToken = loginData.sessionToken;
			let loggedUser = loginData.user;
			sessionManager.login(sessionToken, loggedUser);
			window.location.href = "/feed_logged.html";
		})
		.catch((error) => messageRenderer.showErrorMessage(error));
}

// RENDERERS
function renderPreviewPhoto() {
	let urlInput = document.getElementById("profile-url");
	let prevImg = document.getElementById("prev-photo");

	urlInput.addEventListener("change", function () {
		prevImg.src = this.value;
	});
}

document.addEventListener("DOMContentLoaded", main);
