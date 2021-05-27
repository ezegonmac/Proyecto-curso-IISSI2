"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { usersAPI } from "/js/api/users.js";
import { followersAPI } from "/js/api/followers.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
	usersAPI
		.getById(userId)
		.then((users) => {
			// RENDERERS
			renderUserProfile(users);

			hideActions();

			renderFollowBtn();
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

function hideActions() {
	let profileOwnerId = userId;
	let actions_container = document.querySelector("#follow-btn");

	let loggedUserId = sessionManager.getLoggedUser().userId;
	if (loggedUserId == profileOwnerId) {
		actions_container.style.display = "none";
	}
}

// BUTTONS

// - follow-button
function renderFollowBtn() {
	let followBtn = document.querySelector("#follow-btn");
	let followerId = sessionManager.getLoggedId();
	let followingId = userId;

	// Render when the page is loaded
	followersAPI
		.getNumByIds(followerId, followingId)
		.then((followers) => {
			let n = Object.values(followers[0])[0];
			if (n == 0) {
				// Not followed
				console.log(n);
			} else {
				// Followed
				console.log(n);
				followBtn.innerText = "Unfollow";
			}
		})
		.catch((error) => {
			console.error(error);
		});

	// Action when is clicked
	followBtn.addEventListener("click", function () {
		console.log("click");
		let notFollowing = followBtn.innerText == "Follow";
		if (notFollowing) {
			let formData = new FormData();
			formData.append("followerId", followerId);
			formData.append("followingId", followingId);

			console.log(formData);
			followersAPI
				.create(formData)
				.then((data) => {
					console.log("Followed");
				})
				.catch((error) => console.error(error));

			followBtn.innerText = "Unfollow";
		} else {
			followersAPI
				.delete(followerId, followingId)
				.then((data) => {
					console.log("Unfollowed");
				})
				.catch((error) => console.error(error));

			followBtn.innerText = "Follow";
		}
		document.location.reload();
	});
}

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
		sessionManager.logout();
		window.location.assign("/feed.html");
	};
}

document.addEventListener("DOMContentLoaded", main);
