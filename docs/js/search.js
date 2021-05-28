"use strict";

import { categorieRenderer } from "/js/renderers/categories.js";
import { categoriesAPI } from "/js/api/categories.js";

let urlParams = new URLSearchParams(window.location.search);
let categorieId = urlParams.get("categorieId");

function main() {
	// FORM
	renderSearchOptions();

	let form = document.querySelector("form");
	form.onsubmit = handleSubmitForm;

	//  CATEGORIE NAME
	renderCategorieName();
}

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

function renderCategorieName() {
	let title = document.querySelector("#title");
	console.log(title);
	if (categorieId == null) {
		title.innerText = "";
		title.style.display = "none";
	} else {
		categoriesAPI
			.getById(categorieId)
			.then((categories) => {
				let categorie = categories[0];
				title.innerText = categorie.name;
				title.style.display = "block";
			})
			.catch((error) => console.error(error));
	}
}

function handleSubmitForm(event) {
	event.preventDefault();

	let form = event.target;
	let formData = new FormData(form);

	let categorie = formData.get("categorie");
	document.location.assign("/search.html?categorieId=" + categorie);
}

document.addEventListener("DOMContentLoaded", main);
