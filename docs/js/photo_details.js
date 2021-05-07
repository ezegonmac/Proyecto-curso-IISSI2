"use strict";
import { commentRenderer } from "/js/renderers/comments.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { commentValidator } from "/js/validators/comments.js";

import { photos } from "/js/renderers/photos.js";
import { comments } from "/js/renderers/comments.js";

function main() {
	let newComForm = document.querySelector("#new-com-form");
	let modComForm = document.querySelector("#mod-com-form");

	newComForm.onsubmit = handleSubmitNewCom;
	modComForm.onsubmit = handleSubmitModCom;
}

// RENDERERS
// - cards
let photo = photos[0];

let cards = photoRenderer.asDetail(photo);

let container1 = document.querySelector("#left-card");
container1.appendChild(cards[0]);
container1.appendChild(cards[1]);

let container2 = document.querySelector("#right-card");
container2.insertBefore(cards[2], container2.firstChild);

let container3 = document.querySelector("#bottom-row");
container3.appendChild(cards[3]);

// - comment details modal
let comment = comments[0];

let card = commentRenderer.asDetail(comment);

let container4 = document.querySelector("#com-details-modal-container");
container4.appendChild(card);

// BUTTONS

// - new comment submit
let newComBtn = document.querySelector("#new-com-btn");
newComBtn.onclick = function () {
	let form = document.querySelector("#new-com-form");
	form.submit();
};

// - mod comment submit
let modComBtn = document.querySelector("#mod-com-btn");
modComBtn.onclick = function () {
	let form = document.querySelector("#mod-com-form");
	form.submit();
};

// VALIDATORS

// - new comment
function handleSubmitNewCom(event) {
	event.preventDefault();

	alert("Form Sent!");
	let form = event.target;
	let formData = new FormData(form);

	let errors = commentValidator.validateNewComment(formData);

	/* Show errors in doc */
	if (errors.length > 0) {
		let errorsDiv = document.querySelector("#errors-new-com");
		errorsDiv.innerHTML = "";
		for (let error of errors) {
			messageRenderer.showErrorMessage(error);
		}
	}
}

// - modify comment
function handleSubmitModCom(event) {
	event.preventDefault();

	alert("Form Sent!");
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
