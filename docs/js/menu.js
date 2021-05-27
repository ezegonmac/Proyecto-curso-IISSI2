"use strict";

import { sessionManager } from "/js/utils/session.js";

function main() {
	checkIfUserIsLogged();
}

function checkIfUserIsLogged() {
	let loggedUser = sessionManager.getLoggedUser();

	if (loggedUser != null) {
		document.location.assign("/feed_logged.html");
	}
}

document.addEventListener("DOMContentLoaded", main);
