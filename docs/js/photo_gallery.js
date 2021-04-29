"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";

function main() {
	let container = document.querySelector("#center-section");
	let photos = [
		{
			title: "Samoyed",
			description: "A very good boy",
			url: "https://source.unsplash.com/250x250",
			user: "@usuario1",
		},
		{
			title: "Samoyed2",
			description: "A very good boy",
			url: "https://source.unsplash.com/251x250",
			user: "@usuario1",
		},
		{
			title: "Samoyed3",
			description: "A very good boy",
			url: "https://source.unsplash.com/252x250",
			user: "@usuario1",
		},
		{
			title: "Samoyed4",
			description: "A very good boy",
			url: "https://source.unsplash.com/253x250",
			user: "@usuario1",
		},
		{
			title: "Samoyed5",
			description: "A very good boy",
			url: "https://source.unsplash.com/253x251",
			user: "@usuario1",
		},
		{
			title: "Samoyed6",
			description: "A very good boy",
			url: "https://source.unsplash.com/253x252",
			user: "@usuario1",
		},
		{
			title: "Samoyed7",
			description: "A very good boy",
			url: "https://source.unsplash.com/253x253",
			user: "@usuario1",
		},
		{
			title: "Samoyed8",
			description: "A very good boy",
			url: "https://source.unsplash.com/252x253",
			user: "@usuario1",
		},
		{
			title: "Samoyed9",
			description: "A very good boy",
			url: "https://source.unsplash.com/253x252",
			user: "@usuario1",
		},
		{
			title: "Samoyed10",
			description: "A very good boy",
			url: "https://source.unsplash.com/255x253",
			user: "@usuario1",
		},
		{
			title: "Samoyed11",
			description: "A very good boy",
			url: "https://source.unsplash.com/256x253",
			user: "@usuario1",
		},
	];

	let gallery = galleryRenderer.asCardGallery(photos);
	container.appendChild(gallery);
}

document.addEventListener("DOMContentLoaded", main);
