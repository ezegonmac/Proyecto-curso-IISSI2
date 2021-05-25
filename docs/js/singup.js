"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";

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

	alert("Register done!");
	let form = event.target;
	let formData = new FormData(form);

	let errors = userValidator.validateRegister(formData);

	/* Show errors in doc */
	if (errors.length == 0) {
		sendRegister(formData);
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
			let sessionToken = loginData.sessionToken;
			let loggedUser = loginData.user;
			sessionManager.login(sessionToken, loggedUser);
			window.location.href = "/feed_logged.html";
		})
		.catch((error) => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);
