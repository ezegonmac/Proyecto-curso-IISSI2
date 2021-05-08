"use strict";

import { trendingGalleryRenderer } from "/js/renderers/trending_gallery.js";
import { photos } from "/js/renderers/photos.js";
import { users } from "/js/renderers/users.js";

// RENDERERS
let container = document.querySelector("#center-section");

let row2 = trendingGalleryRenderer.asPunctiationPhotosRow(photos);
container.appendChild(row2);

let row3 = trendingGalleryRenderer.asCommentsPhotosRow(photos);
container.appendChild(row3);

let row4 = trendingGalleryRenderer.asFollowersUsersRow(users);
container.appendChild(row4);

let row5 = trendingGalleryRenderer.asPunctuationUsersRow(users);
container.appendChild(row5);
