"use strict";

import { categoriesAPI } from "/js/api/categories.js";

const buttonRenderer = {
	// - add categorie button
	renderAddCategorieBtn: function () {
		let addCatBtn = document.querySelector("#add-categorie-button");

		addCatBtn.addEventListener("click", function () {
			let name = prompt("Input the categorie name", "Name");

			categoriesAPI
				.create(name)
				.then((data) => {
					document.location.reload();
				})
				.catch((error) => console.error(error));
		});
	},
};

export { buttonRenderer };
