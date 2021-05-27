"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");
let followerId = urlParams.get("followerId");

function main() {
	let container = document.querySelector("#center-section");

	// ALL FROM USER FOLLOWINGS
	if (followerId != null) {
		console.log(followerId);
		photosAPI
			.getAllFromFollowing(followerId)
			.then((photos) => {
				let gallery = galleryRenderer.asCardGallery(photos);
				container.appendChild(gallery);
			})
			.catch((error) => console.error(error));

		// ALL PHOTOS FROM ONE USER
	} else if (userId != null) {
		photosAPI
			.getAllFromUser(userId)
			.then((photos) => {
				let gallery = galleryRenderer.asCardGallery(photos);
				container.appendChild(gallery);
			})
			.catch((error) => console.error(error));
	} else {
		photosAPI
			.getAll()
			.then((photos) => {
				let gallery = galleryRenderer.asCardGallery(photos);
				container.appendChild(gallery);
			})
			.catch((error) => console.error(error));
	}
}

document.addEventListener("DOMContentLoaded", main);
