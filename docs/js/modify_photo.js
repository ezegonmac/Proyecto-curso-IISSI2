"use strict";

import { photoValidator } from "/js/validators/photos.js";

function main() {}

let form = document.querySelector("#form");

// BUTTONS

// - cancel button
let cancelBtn = document.querySelector("#cancel-button");

cancelBtn.onclick = function () {
	location.href = "/photo_details.html";
};

// - save button
let saveBtn = document.querySelector("#save-button");

saveBtn.onclick = function () {
	location.href = "/photo_details.html";
};

// - delete button
let delBtn = document.querySelector("#delete-button");

delBtn.onclick = function () {};

// - cancel del button
let cancelDelBtn = document.querySelector("#cancel-del-btn");

cancelDelBtn.onclick = function () {};

// - confirm del button
let confirmDelBtn = document.querySelector("#confirm-del-btn");

confirmDelBtn.onclick = function () {
	location.href = "/feed_logged.html";
};

// -----
document.addEventListener("DOMContentLoaded", main);
