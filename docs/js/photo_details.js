"use strict";
import { commentRenderer } from "/js/renderers/comments.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { commentValidator } from "/js/validators/comments.js";
import { photosAPI } from "/js/api/photos.js";
import { commentsAPI } from "/js/api/comments.js";
import { languageAPI } from "/js/api/language.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { categorieRenderer } from "/js/renderers/categories.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
	photosAPI
		.getById(photoId)
		.then((photos) => {
			let photo = photos[0];

			// RENDERERS
			renderPhotoDetails(photo);
			// TODO
			//renderCommentsDetails();

			hideActions2();
			hideActions(photo.userId);

			// BUTTONS
			renderModComBtn();
			//renderNewComSubmit();
			renderModPhotoBtn();
		})
		.catch((error) => console.error(error));

	// new comment form
	let newComForm = document.querySelector("#new-com-form");
	newComForm.onsubmit = handleSubmitNewCom;

	// new comment form
	// let modComForm = document.querySelector("#mod-com-form");
	// modComForm.onsubmit = handleSubmitModCom;
}
// RENDERERS

function renderCategories() {
	let categoriesContainer = document.querySelector("#categories");

	categoriesAPI
		.getByPhotoId(photoId)
		.then((categories) => {
			for (let categorie of categories) {
				let card = categorieRenderer.asTextContainer(categorie);

				categoriesContainer.appendChild(card);
			}
		})
		.catch((error) => console.error(error));
}

function renderPhotoDetails(photo) {
	let cards = photoRenderer.asDetail(photo);

	// containers
	let container1 = document.querySelector("#left-card");
	let container2 = document.querySelector("#right-card");
	let container3 = document.querySelector("#bottom-row");

	container1.appendChild(cards[0]);
	container1.appendChild(cards[1]);

	container2.insertBefore(cards[2], container2.firstChild);

	container3.appendChild(cards[3]);

	renderCategories();
}

function hideActions(photoOwnerId) {
	let actions_container = document.querySelector(".button-container");

	let userId = sessionManager.getLoggedUser().userId;
	if (userId != photoOwnerId) {
		actions_container.style.display = "none";
	}
}

function renderCommentsDetails() {
	// - comment details modal
	let comment = comments[0];
	//evita que se renderizen comentarios si no hay ninguno
	if (comment != undefined && comment != null) {
		let card = commentRenderer.asDetail(comment);

		let container4 = document.querySelector("#com-details-modal-container");
		container4.appendChild(card);

		// boton de modificar comentario
		let modComForm = document.querySelector("#mod-com-form");
		modComForm.onsubmit = handleSubmitModCom;
	}
}

// BUTTONS

// - new comment submit
// function renderNewComSubmit() {
// 	let newComBtn = document.querySelector("#new-com-btn");
// 	newComBtn.onclick = function () {
// 		console.log("hola");
// 		let newComForm = document.querySelector("#new-com-form");
// 		newComForm.submit();
// 	};
// }

// - mod comment submit
function renderModComBtn() {
	let comment = comments[0];
	//evita que se renderize el boton si no hay ningun comentario
	if (comment != undefined && comment != null) {
		let modComBtn = document.querySelector("#mod-com-btn");
		modComBtn.onclick = function () {
			let form = document.querySelector("#mod-com-form");
			form.submit();
		};
	}
}

// - mod photo
function renderModPhotoBtn() {
	let modPhotoBtn = document.querySelector("#mod-photo-button");
	modPhotoBtn.onclick = function () {
		window.location.assign(`/modify_photo.html?photoId=${photoId}`);
	};
}

// FORMS

// - new comment
function handleSubmitNewCom(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	let errors = [];

	let text = formData.get("comment");
	text = text.toLowerCase();
	languageAPI
		.getAll()
		.then((words) => {
			for (let word of words) {
				let invalid = text.search(word.word) != -1;
				if (invalid) {
					// contains innapropiate words
					errors.push("Comments cannot contain inappropiate words");
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
				formData.append("photoId", photoId);
				for (var value of formData.keys()) {
					console.log(value);
					console.log(formData.get(value));
				}
				commentsAPI
					.create(formData)
					.then((data) => {
						window.location.assign(
							`/photo_details.html?photoId=` + photoId
						);
					})
					.catch((error) => console.error(error));
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

function hideActions2() {
	let actionsContainer = document.querySelector("#new-com-button");

	let loggedId = sessionManager.getLoggedId();
	commentsAPI
		.getByPhotoId(photoId)
		.then((comments) => {
			for (let comment of comments) {
				let hasComment = comment.userId == loggedId;
				if (hasComment) {
					actionsContainer.style.display = "none";
				}
			}
		})
		.catch((error) => console.error(error));
}

// - modify comment
function handleSubmitModCom(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	let errors = commentValidator.validateModifyComment(formData);

	/* Show errors in doc */
	if (errors.length > 0) {
		let errorsDiv = document.querySelector("#errors-new-com");
		errorsDiv.innerHTML = "";
		for (let error of errors) {
			messageRenderer.showErrorMessage(error);
		}
	}
}

document.addEventListener("DOMContentLoaded", main);
