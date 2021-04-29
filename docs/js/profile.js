"use strict";
import { userRenderer } from "/js/renderers/users.js";
import { users } from "/js/renderers/users.js";

let user = users[0];

let cards = userRenderer.asProfile(user);

let container = document.querySelector("#profile-section");
container.appendChild(cards[0]);
container.appendChild(cards[1]);
