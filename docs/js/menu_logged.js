"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { usersAPI } from "/js/api/users.js";

function main() {
	usersAPI
		.getById(1)
		.then((users) => {
			let user = users[0];

			let cards = userRenderer.asMenuItem(user);

			let container = document.querySelector("#menu_login");
			container.appendChild(cards[0]);
			container.appendChild(cards[1]);
		})
		.catch((error) => messageRenderer.showErrorMessage(error));
}

addEventListener("DOMContentLoaded", main);
