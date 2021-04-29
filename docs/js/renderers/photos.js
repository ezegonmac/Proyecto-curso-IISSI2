"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";

const photoRenderer = {
	asCard: function photoAsCard(photo) {
		// TODO - separar en una funcion aparte
		let users = [
			{
				username: "@usuario1",
				name: "nombre",
				surnames: "surnombres",
				avatar: "/images/profile_photo.png",
			},
		];
		// obtener usuario usando su nombre
		let photo_user;
		for (let user of users) {
			if (photo.user == user.username) {
				photo_user = user;
				break;
			}
		}
		// ---------------------------------------

		let html = `<div class="col">
                        <a class="photo-card" href="photo_details.html">
                            <img class="card-image" 
                                 src=${photo.url}>
                            <div class="card-text">
                                <h5>${photo.title}</h5>
                                <p>${photo.description}</p>
                            </div>
                            <img class="avatar" 
                                 src=${photo_user.avatar}>
                        </a>
                    </div>`;

		let card = parseHTML(html);
		return card;
	},
};

export { photoRenderer };
