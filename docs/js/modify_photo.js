"use strict";

import { photosAPI } from "/js/api/photos.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { languageAPI } from "/js/api/language.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { categorieRenderer } from "/js/renderers/categories.js";
import { buttonRenderer } from "/js/renderers/buttons.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
	renderPhotoDetails();
	renderSearchOptions();

	// form
	let form = document.querySelector("#form");
	form.onsubmit = handleSubmitPhoto;
}

// FORM
function renderSearchOptions() {
	categoriesAPI
		.getAll()
		.then((categories) => {
			let container = document.querySelector("#inlineFormCustomSelect");

			for (let categorie of categories) {
				let card = categorieRenderer.asFormItem(categorie);
				container.appendChild(card);
			}

			// TODO
			//renderUsedCategories();
		})
		.catch((error) => console.error(error));
}

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
						// 1 delete all categories
						photosAPI.deleteAllCategoriesFromPhoto(photoId);
						// 2 add the specified categories
						setTimeout(function () {
							addCategoriesToPhoto(formData);
						}, 500);

						setTimeout(function () {
							window.location.assign(
								`/photo_details.html?photoId=${photoId}`
							);
						}, 1000);
					})
					.catch((error) => console.error(error));
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

function handleDelete(photo) {
	let hasComments = photo.comments > 0;
	if (hasComments) {
		messageRenderer.showErrorMessage(
			"You cannot delete a post if it already contains comments"
		);
	} else {
		// let modal = document.querySelector("#confirm-del-modal");
		// modal.classList.add("modal-visible");
		// modal.classList.remove("modal-hidden");
		// modal.setAttribute("aria-hidden", false);
		let answer = confirm("Are you sure to delete this post?");
		if (answer) {
			photosAPI
				.delete(photoId)
				.then((data) => window.location.assign("feed_logged.html"))
				.catch((error) => messageRenderer.showErrorMessage(error));
		}
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

			// BUTTONS
			renderSaveBtn();
			renderDelBtn(photo);
			renderCancelBtn();
			renderCancelDelBtn();
			renderConfirmBtn();
			buttonRenderer.renderAddCategorieBtn();
		})
		.catch((error) => console.error(error));
}

function renderUsedCategories() {
	categoriesAPI
		.getByPhotoId(photoId)
		.then((categories) => {
			for (let categorie of categories) {
				let categorieId = categorie["categorieId"];
				let option = document.querySelector(
					"option[value=" + categorieId + "]"
				);
				console.log(option);
				option.setAttibute("font-weight", "bold");
			}
		})
		.catch((error) => console.error(error));
}

// FORM

function addCategoriesToPhoto(formData) {
	for (let value of formData) {
		let isCategorie = value[0] == "categorie";
		if (isCategorie) {
			let categorieId = value[1];
			console.log(categorieId);
			categoriesAPI.addCategorieToPhoto(photoId, categorieId);
		}
	}
}

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
function renderDelBtn(photo) {
	let delBtn = document.querySelector("#delete-button");

	delBtn.addEventListener("click", function () {
		handleDelete(photo);
	});
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
