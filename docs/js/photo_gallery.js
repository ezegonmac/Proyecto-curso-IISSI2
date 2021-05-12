"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js";

function main() {
	let container = document.querySelector("#center-section");

	console.log(container);

	photosAPI
		.getAll()
		.then((photos) => {
			let gallery = galleryRenderer.asCardGallery(photos);
			container.appendChild(gallery);
		})
		.catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", main);
