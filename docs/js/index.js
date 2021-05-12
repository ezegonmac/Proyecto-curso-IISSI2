"use strict";

import { photoRenderer } from "/js/renderers/photos.js";

let photo = {
	description: "descripcion1",
	photoId: 1,
	title: "titulo1",
	url: "./images/posts/p0.jpg",
	userId: 1,
	valoration: 4.5,
};

function main() {}

function getPhoto() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(photo);
		}, 2000);
	});
}

document.addEventListener("DOMContentLoaded", main);
