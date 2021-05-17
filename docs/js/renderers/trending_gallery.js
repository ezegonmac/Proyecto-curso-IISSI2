"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer, loadUsernameCard } from "/js/renderers/photos.js";
import { userRenderer } from "/js/renderers/users.js";
import { categorieRenderer } from "/js/renderers/categories.js";
import { photosAPI } from "/js/api/photos.js";
import { usersAPI } from "/js/api/users.js";

const rowLenght = 5;

const trendingGalleryRenderer = {
	asCategorieRow: function (categories) {
		// container
		let html = `<div id="section-muc" class="row">
						<h5 class="card-title">Most Used Categories</h5>
					</div>`;

		let container = parseHTML(html);

		// categories

		// Recorremos las categorias y las añadimos al container
		let i = 0;
		while (i < rowLenght) {
			let categorie = categories[i];
			let card = categorieRenderer.asMiniCard(categorie);
			container.appendChild(card);
			i++;
		}

		return container;
	},
	asPunctiationPhotosRow: function () {
		// container
		let html = `<div id="section-bpp" class="row">
                        <h5 class="card-title">Best Punctuated Posts</h5>
                    </div>`;

		let container = parseHTML(html);

		// photos
		photosAPI
			.getAllOrderedByPunctuation()
			.then((photos) => {
				// Recorremos las fotos y las añadimos al container
				let i = 0;
				while (i < rowLenght) {
					let photo = photos[i];
					let card = photoRenderer.asMiniCard(photo);
					loadUsernameCard(card, photo.userId);
					container.appendChild(card);
					i++;
				}
			})
			.catch((error) => console.error(error));

		return container;
	},
	asCommentsPhotosRow: function () {
		// container
		let html = `<div id="section-mcp" class="row">
                        <h5 class="card-title">Most Commented Posts</h5>
                    </div>`;

		let container = parseHTML(html);

		//photos
		photosAPI
			.getAllOrderedByComments()
			.then((photos) => {
				// Recorremos las fotos y las añadimos al container
				let i = 0;
				while (i < rowLenght) {
					let photo = photos[i];
					let card = photoRenderer.asMiniCard(photo);
					loadUsernameCard(card, photo.userId);
					container.appendChild(card);
					i++;
				}
			})
			.catch((error) => {
				console.error(error);
			});

		return container;
	},
	asFollowersUsersRow: function (users) {
		// container
		let html = `<div id="section-mfu" class="row">
                        <h5 class="card-title">Most Followed Users</h5>
                    </div>`;

		let container = parseHTML(html);

		// users
		usersAPI
			.getAllOrderedByFollowers()
			.then((users) => {
				// Recorremos los usuarios y los añadimos al container
				let i = 0;
				while (i < rowLenght) {
					let user = users[i];
					let card = userRenderer.asMiniCard(user);
					container.appendChild(card);
					i++;
				}
			})
			.catch((errors) => {
				console.error(errors);
			});

		return container;
	},
	asPunctuationUsersRow: function (users) {
		// container
		let html = `<div id="section-bpu" class="row">
                        <h5 class="card-title">Best Punctuated Users</h5>
                    </div>`;

		let container = parseHTML(html);

		//users
		usersAPI
			.getAllOrderedByPunctuation()
			.then((users) => {
				// Recorremos los usuarios y los añadimos al container
				let i = 0;
				while (i < rowLenght) {
					let user = users[i];
					let card = userRenderer.asMiniCard(user);
					container.appendChild(card);
					i++;
				}
			})
			.catch((errors) => {
				console.error(errors);
			});

		return container;
	},
};

export { trendingGalleryRenderer };
