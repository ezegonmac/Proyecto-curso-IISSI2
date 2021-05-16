"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { usersAPI } from "/js/api/users.js";

function main() {
	let container = document.querySelector(".menu_right");

	usersAPI
		.getById(1)
		.then((users) => {
			let user = users[0];

			let card = userRenderer.asMenuItem(user);
			container.appendChild(card);
		})
		.catch((error) => console.error(error));
}

addEventListener("DOMContentLoaded", main);
