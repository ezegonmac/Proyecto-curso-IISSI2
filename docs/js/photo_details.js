"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { photos } from "/js/renderers/photos.js";

// TODO - cambiar la funcion photoRenderer.asDetail para que
//        devuelva un array con los dos componentes

let photo = photos[0];

let container = document.querySelector("#center-card");
let card = photoRenderer.asDetail(photo);
container.insertBefore(card, container.firstChild);
