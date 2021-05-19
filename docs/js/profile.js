"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { usersAPI } from "/js/api/users.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
	usersAPI
		.getById(userId)
		.then((users) => {
			let user = users[0];

			let cards = userRenderer.asProfile(user);

			let container = document.querySelector("#profile-section");
			container.appendChild(cards[0]);
			container.appendChild(cards[1]);
		})
		.catch((error) => console.error(error));
}

// BUTTONS

// - close-session-button
let closeSesBtn = document.querySelector("#close-button");
closeSesBtn.onclick = function () {
	let form = document.querySelector("#new-com-form");
	window.location.assign("/feed.html");
};

document.addEventListener("DOMContentLoaded", main);
