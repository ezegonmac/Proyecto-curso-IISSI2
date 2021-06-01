"use strict";

import { photosAPI } from "/js/api/photos.js";
import { sessionManager } from "/js/utils/session.js";
import { languageAPI } from "/js/api/language.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { categorieRenderer } from "/js/renderers/categories.js";
import { buttonRenderer } from "/js/renderers/buttons.js";

function main() {
	let form = document.querySelector("#form");
	form.onsubmit = handleSubmitForm;

	renderSearchOptions();
	renderPreviewPhoto();
	buttonRenderer.renderAddCategorieBtn();
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
		})
		.catch((error) => console.error(error));
}

function renderPreviewPhoto() {
	let urlInput = document.getElementById("url-button");
	let prevImg = document.getElementById("prev-photo");

	urlInput.addEventListener("change", function () {
		prevImg.src = this.value;
	});
}

// BUTTONS

// - post button
// function renderPostBtn() {
// 	let btn = document.querySelector("#post-button");
// 	let form = document.querySelector("#form");
// 	btn.onclick = function () {
// 		form.submit();
// 	};
// }

// VALIDATORS

function handleSubmitForm(event) {
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
				// Add the current user ID
				formData.append("userId", sessionManager.getLoggedId());
				//console.log(formData.forEach((v) => console.log(v)));
				photosAPI
					.create(formData)
					.then((data) => {
						let photoId = Object.values(data)[0];
						addCategoriesToPhoto(formData, photoId);

						setTimeout(function () {
							window.location.assign("/feed_logged.html");
						}, 1000);
					})
					.catch((error) => messageRenderer.showErrorMessage(error));
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

function addCategoriesToPhoto(formData, photoId) {
	for (let value of formData) {
		let isCategorie = value[0] == "categorie";
		if (isCategorie) {
			let categorieId = value[1];
			console.log(categorieId);
			categoriesAPI.addCategorieToPhoto(photoId, categorieId);
		}
	}
}

document.addEventListener("DOMContentLoaded", main);
