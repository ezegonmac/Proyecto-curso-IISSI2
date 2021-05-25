"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { usersAPI } from "/js/api/users.js";
import { sessionManager } from "/js/utils/session.js";

function main() {
	let container = document.querySelector(".menu_right");

	let userId = sessionManager.getLoggedUser().userId;

	usersAPI
		.getById(userId)
		.then((users) => {
			let user = users[0];

			let card = userRenderer.asMenuItem(user);
			container.appendChild(card);
		})
		.catch((error) => console.error(error));
}

addEventListener("DOMContentLoaded", main);
