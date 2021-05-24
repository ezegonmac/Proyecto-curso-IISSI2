"use strict";

import { photoValidator } from "/js/validators/photos.js";
import { photosAPI } from "/js/api/photos.js";
import { photoRenderer } from "/js/renderers/photos.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
	renderPhotoDetails();

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
	photosAPI
		.update(photoId, formData)
		.then((data) => {
			window.location.assign(`/photo_details.html?photoId=${photoId}`);
		})
		.catch((error) => console.error(error));
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
function renderPhotoDetails() {
	let container = document.querySelector("#left-card");

	photosAPI
		.getById(photoId)
		.then((photos) => {
			let photo = photos[0];

			let cards = photoRenderer.asDetail(photo);

			container.appendChild(cards[1]);

			let titleContainer = document.querySelector("#title");
			let descContainer = document.querySelector("#description");

			titleContainer.value = photo.title;
			descContainer.value = photo.description;
		})
		.catch((error) => console.error(error));

	// BUTTONS

	renderSaveBtn();
	renderDelBtn();
	renderCancelBtn();
	renderCancelDelBtn();
	renderConfirmBtn();
}

// FORM

function handleSubmitForm(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	console.log(formData.forEach((v) => console.log(v)));
	photosAPI
		.update(formData)
		.then((data) => {
			console.log("updated");
			//window.location.assign("/feed_logged.html");
		})
		.catch((error) => console.error(error));
}

// BUTTONS

// - cancel button
function renderCancelBtn() {
	let cancelBtn = document.querySelector("#cancel-button");

	cancelBtn.onclick = function () {
		window.location.assign(`/photo_details.html?photoId=${photoId}`);
	};
}

// - save button
function renderSaveBtn() {
	let saveBtn = document.querySelector("#save-button");

	saveBtn.onclick = function () {
		console.log("saved");
	};
}

// - delete button
function renderDelBtn() {
	let delBtn = document.querySelector("#delete-button");

	delBtn.onclick = function () {};
}

// - cancel-del button
function renderCancelDelBtn() {
	let cancelDelBtn = document.querySelector("#cancel-del-btn");

	cancelDelBtn.onclick = function () {};
}

// - confirm del button
function renderConfirmBtn() {
	let confirmDelBtn = document.querySelector("#confirm-del-btn");

	confirmDelBtn.onclick = function () {
		photosAPI
			.delete(photoId)
			.then((data) => {
				window.location.assign("/feed_logged.html");
			})
			.catch((error) => console.error(error));
	};
}

// -----
document.addEventListener("DOMContentLoaded", main);
