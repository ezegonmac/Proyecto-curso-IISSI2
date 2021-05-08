"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { userRenderer } from "/js/renderers/users.js";
import { categorieRenderer } from "/js/renderers/categories.js";

const rowLenght = 5;

const trendingGalleryRenderer = {
	asCategorieRow: function (categories) {
		let html = `<div id="section-muc" class="row">
						<h5 class="card-title">Most Used Categories</h5>
					</div>`;

		let container = parseHTML(html);

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
	asPunctiationPhotosRow: function (photos) {
		let html = `<div id="section-bpp" class="row">
                        <h5 class="card-title">Best Punctuated Posts</h5>
                    </div>`;

		let container = parseHTML(html);

		// Recorremos las fotos y las añadimos al container
		let i = 0;
		while (i < rowLenght) {
			let photo = photos[i];
			let card = photoRenderer.asMiniCard(photo);
			container.appendChild(card);
			i++;
		}

		return container;
	},
	asCommentsPhotosRow: function (photos) {
		let html = `<div id="section-mcp" class="row">
                        <h5 class="card-title">Most Commented Posts</h5>
                    </div>`;

		let container = parseHTML(html);

		// Recorremos las fotos y las añadimos al container
		let i = 0;
		while (i < rowLenght) {
			let photo = photos[i];
			let card = photoRenderer.asMiniCard(photo);
			container.appendChild(card);
			i++;
		}

		return container;
	},
	asFollowersUsersRow: function (users) {
		let html = `<div id="section-mfu" class="row">
                        <h5 class="card-title">Most Followed Users</h5>
                    </div>`;

		let container = parseHTML(html);

		// Recorremos los usuarios y los añadimos al container
		let i = 0;
		while (i < rowLenght) {
			let user = users[i];
			let card = userRenderer.asMiniCard(user);
			container.appendChild(card);
			i++;
		}

		return container;
	},
	asPunctuationUsersRow: function (users) {
		let html = `<div id="section-bpu" class="row">
                        <h5 class="card-title">Best Punctuated Users</h5>
                    </div>`;

		let container = parseHTML(html);

		// Recorremos los usuarios y los añadimos al container
		let i = 0;
		while (i < rowLenght) {
			let user = users[i];
			let card = userRenderer.asMiniCard(user);
			container.appendChild(card);
			i++;
		}

		return container;
	},
};

export { trendingGalleryRenderer };
