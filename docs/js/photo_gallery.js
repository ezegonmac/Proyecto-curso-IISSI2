"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { photos } from "/js/renderers/photos.js";

function main() {
	let container = document.querySelector("#center-section");
	let gallery = galleryRenderer.asCardGallery(photos);
	container.appendChild(gallery);
}

document.addEventListener("DOMContentLoaded", main);
