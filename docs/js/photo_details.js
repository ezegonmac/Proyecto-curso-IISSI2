"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { photos } from "/js/renderers/photos.js";

// RENDERERS
let photo = photos[0];

let cards = photoRenderer.asDetail(photo);

let container1 = document.querySelector("#left-card");
container1.appendChild(cards[0]);
container1.appendChild(cards[1]);

let container2 = document.querySelector("#right-card");
container2.insertBefore(cards[2], container2.firstChild);

let container3 = document.querySelector("#bottom-row");
container3.appendChild(cards[3]);

// BUTTON
