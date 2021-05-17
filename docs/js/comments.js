"use strict";
import { commentsSectionRenderer } from "/js/renderers/comments_section.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
	// RENDERER
	let commentsSection = commentsSectionRenderer.asList(photoId);

	let container = document.querySelector("#comments-section");
	container.appendChild(commentsSection);
}

document.addEventListener("DOMContentLoaded", main);
