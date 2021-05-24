"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { usersAPI } from "/js/api/users.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
	usersAPI
		.getById(userId)
		.then((users) => {
			// RENDERERS
			renderUserProfile(users);
		})
		.catch((error) => console.error(error));

	// RENDERERS
	renderCloseSesBtn();
	renderNewPostBtn();
}

// RENDERERS
function renderUserProfile(users) {
	let user = users[0];

	let cards = userRenderer.asProfile(user);

	let container = document.querySelector("#profile-section");
	container.appendChild(cards[0]);
	container.appendChild(cards[1]);
}

// BUTTONS

// - new-post-button
function renderNewPostBtn() {
	let newPostBtn = document.querySelector("#new-post-button");
	newPostBtn.onclick = function () {
		document.location.assign("/post_photo.html");
	};
}

// - close-session-button
function renderCloseSesBtn() {
	let closeSesBtn = document.querySelector("#close-button");
	closeSesBtn.onclick = function () {
		let form = document.querySelector("#new-com-form");
		window.location.assign("/feed.html");
	};
}

document.addEventListener("DOMContentLoaded", main);
