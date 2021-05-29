"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer, loadUsernameCard } from "/js/renderers/photos.js";

const galleryRenderer = {
	asCardGallery: function (photos) {
		let galleryContainer = parseHTML(`<div id="photo-gallery"></div>`);
		let row = parseHTML(`<div class="row"></div>`);
		galleryContainer.appendChild(row);

		let counter = 0;

		for (let photo of photos) {
			let card = photoRenderer.asCard(photo);
			loadUsernameCard(card, photo.userId);
			row.appendChild(card);

			counter++;

			// cada 5 imagenes por fila creamos una nueva row
			if (counter % 5 === 0) {
				let row = parseHTML(`<div class="row"></div>`);
				galleryContainer.appendChild(row);
			}
		}

		return galleryContainer;
	},
	asCardGalleryNotLogged: function (photos) {
		let galleryContainer = parseHTML(`<div id="photo-gallery"></div>`);
		let row = parseHTML(`<div class="row"></div>`);
		galleryContainer.appendChild(row);

		let counter = 0;

		for (let photo of photos) {
			let card = photoRenderer.asCardNotLogged(photo);
			loadUsernameCard(card, photo.userId);
			row.appendChild(card);

			counter++;

			// cada 5 imagenes por fila creamos una nueva row
			if (counter % 5 === 0) {
				let row = parseHTML(`<div class="row"></div>`);
				galleryContainer.appendChild(row);
			}
		}

		return galleryContainer;
	},
};

export { galleryRenderer };
