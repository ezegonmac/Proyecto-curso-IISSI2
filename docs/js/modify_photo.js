"use strict";

import { photoValidator } from "/js/validators/photos.js";
import { photosAPI } from "/js/api/photos.js";
import { photoRenderer } from "/js/renderers/photos.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
	// form
	let form = document.querySelector("#form");
	form.onsubmit = handleSubmitPhoto;
}

// FORM
function handleSubmitPhoto(event) {
	event.preventDefault();
	let form = event.target;
	let formData = new FormData(form);

	// TODO
	// Add the current user ID
	formData.append("userId", 1);
	photosAPI
		.update(formData)
		.then((data) => window.location.assign("/photo_details.html"))
		.catch((error) => messageRenderer.showErrorMessage(error));
}

function handleDelete(event) {
	let answer = confirm("Do you really want to delete this photo?");
	if (answer) {
		photosAPI
			.delete(photoId)
			.then((data) => window.location.assign("feed_logged.html"))
			.catch((error) => messageRenderer.showErrorMessage(error));
	}
}

// RENDERER
let container = document.querySelector("#left-card");

photosAPI
	.getById(photoId)
	.then((photos) => {
		let photo = photos[0];

		let cards = photoRenderer.asDetail(photo);

		container.appendChild(cards[1]);
	})
	.catch((error) => console.error(error));

// BUTTONS

// - cancel button
let cancelBtn = document.querySelector("#cancel-button");

cancelBtn.onclick = function () {
	location.href = "/photo_details.html";
};

// - save button
let saveBtn = document.querySelector("#save-button");

saveBtn.onclick = function () {};

// - delete button
let delBtn = document.querySelector("#delete-button");

delBtn.onclick = function () {};

// - cancel del button
let cancelDelBtn = document.querySelector("#cancel-del-btn");

cancelDelBtn.onclick = function () {};

// - confirm del button
let confirmDelBtn = document.querySelector("#confirm-del-btn");

confirmDelBtn.onclick = function () {
	location.href = "/feed_logged.html";
};

// -----
document.addEventListener("DOMContentLoaded", main);
