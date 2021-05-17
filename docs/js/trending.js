"use strict";

import { trendingGalleryRenderer } from "/js/renderers/trending_gallery.js";
import { categories } from "/js/renderers/categories.js";

// RENDERERS
let container = document.querySelector("#center-section");

let row1 = trendingGalleryRenderer.asCategorieRow(categories);
container.appendChild(row1);

let row2 = trendingGalleryRenderer.asPunctiationPhotosRow();
container.appendChild(row2);

let row3 = trendingGalleryRenderer.asCommentsPhotosRow();
container.appendChild(row3);

let row4 = trendingGalleryRenderer.asFollowersUsersRow();
container.appendChild(row4);

let row5 = trendingGalleryRenderer.asPunctuationUsersRow();
container.appendChild(row5);
