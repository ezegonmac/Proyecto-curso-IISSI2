"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");
let followerId = urlParams.get("followerId");
let categorieId = urlParams.get("categorieId");

function main() {
	let container = document.querySelector("#center-section");

	// ALL FROM CATEGORIE
	if (categorieId != null) {
		console.log(categorieId);
		photosAPI
			.getAllFromCategorie(categorieId)
			.then((photos) => {
				let gallery = galleryRenderer.asCardGallery(photos);
				container.appendChild(gallery);
			})
			.catch((error) => console.error(error));
	}
	// ALL FROM USER FOLLOWINGS
	else if (followerId != null) {
		console.log(followerId);
		photosAPI
			.getAllFromFollowing(followerId)
			.then((photos) => {
				let gallery = galleryRenderer.asCardGallery(photos);
				container.appendChild(gallery);
			})
			.catch((error) => console.error(error));
	}
	// ALL PHOTOS FROM ONE USER
	else if (userId != null) {
		photosAPI
			.getAllFromUser(userId)
			.then((photos) => {
				let gallery = galleryRenderer.asCardGallery(photos);
				container.appendChild(gallery);
			})
			.catch((error) => console.error(error));
	} else {
		let isLogged = sessionManager.isLogged();
		// FEED LOGGED
		if (isLogged) {
			photosAPI
				.getAll()
				.then((photos) => {
					let gallery = galleryRenderer.asCardGallery(photos);
					container.appendChild(gallery);
				})
				.catch((error) => console.error(error));
		}
		// FEED NOT LOGGED
		else {
			photosAPI
				.getAll()
				.then((photos) => {
					let gallery =
						galleryRenderer.asCardGalleryNotLogged(photos);
					container.appendChild(gallery);
				})
				.catch((error) => console.error(error));
		}
	}
}

document.addEventListener("DOMContentLoaded", main);
