"use strict";

import { photosAPI } from "/js/api/photos.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { languageAPI } from "/js/api/language.js";
import { messageRenderer } from "/js/renderers/messages.js";

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

	let errors = [];

	let text = formData.get("title");
	text = text.concat(formData.get("description"));

	text = text.toLowerCase();
	languageAPI
		.getAll()
		.then((words) => {
			for (let word of words) {
				console.log(word);
				let invalid = text.search(word.word) != -1;
				if (invalid) {
					// contains innapropiate words
					errors.push(
						"Title and description cannot contain inappropiate words"
					);
				}
			}

			/* Show errors in doc */
			if (errors.length > 0) {
				let errorsDiv = document.querySelector("#errors");
				errorsDiv.innerHTML = "";
				for (let error of errors) {
					messageRenderer.showErrorMessage(error);
				}
			} else {
				photosAPI
					.update(photoId, formData)
					.then((data) => {
						window.location.assign(
							`/photo_details.html?photoId=${photoId}`
						);
					})
					.catch((error) => console.error(error));
			}
		})
		.catch((error) => {
			console.error(error);
		});
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

function checkFormDataLanguage(formData) {
	console.log(formData);
	let title = formData.get("title");
	let description = formData.get("description");
	console.log(title);
	console.log(description);

	checkInappropiateLanguage(title);
	checkInappropiateLanguage(description);
}

// -----
document.addEventListener("DOMContentLoaded", main);
