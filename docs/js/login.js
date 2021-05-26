"use strict";

import { authAPI } from "./api/auth.js";
import { sessionManager } from "./utils/session.js";
import { messageRenderer } from "./renderers/messages.js";
import { userValidator } from "./validators/users.js";

function main() {
	// FORM
	let form = document.querySelector("#login-form");
	form.onsubmit = handleSubmitLogin;
}

function handleSubmitLogin(event) {
	event.preventDefault();

	alert("Login done!");
	let form = event.target;
	let formData = new FormData(form);

	console.log(formData);

	let errors = userValidator.validateLogin(formData);

	/* Show errors in doc */
	if (errors.length == 0) {
		sendLogin(formData);
	} else {
		let errorsDiv = document.querySelector("errors");
		errorsDiv.innerHTML = "";
		for (let error of errors) {
			messageRenderer.showErrorMessage(error);
		}
	}
}

function sendLogin(formData) {
	authAPI
		.login(formData)
		.then((loginData) => {
			// Successful login
			let sessionToken = loginData.sessionToken;
			let loggedUser = loginData.user;
			sessionManager.login(sessionToken, loggedUser);
			window.location.href = "/feed_logged.html";
		})
		.catch((error) => messageRenderer.showErrorAsAlert(error));
}

document.addEventListener("DOMContentLoaded", main);
