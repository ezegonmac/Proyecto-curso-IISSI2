"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { userRenderer } from "/js/renderers/users.js";

const trendingGalleryRenderer = {
	asPunctiationPhotosRow: function (photos) {
		let html = `<div id="section-bpp" class="row">
                        <h5 class="card-title">Best Punctuated Posts</h5>
                    </div>`;

		let container = parseHTML(html);

		// Recorremos las fotos y las añadimos al container
		let i = 0;
		let rowLenght = 5;
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
		let rowLenght = 5;
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
		let rowLenght = 5;
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
		let rowLenght = 5;
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
