"use strict";
import { commentRenderer } from "/js/renderers/comments.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { photos } from "/js/renderers/photos.js";
import { comments } from "/js/renderers/comments.js";

// RENDERERS
// - cards
let photo = photos[0];

let cards = photoRenderer.asDetail(photo);

let container1 = document.querySelector("#left-card");
container1.appendChild(cards[0]);
container1.appendChild(cards[1]);

let container2 = document.querySelector("#right-card");
container2.insertBefore(cards[2], container2.firstChild);

let container3 = document.querySelector("#bottom-row");
container3.appendChild(cards[3]);

// - comment details modal
let comment = comments[0];

let card = commentRenderer.asDetail(comment);

let container4 = document.querySelector("#com-details-modal-container");
container4.appendChild(card);

// BUTTON
