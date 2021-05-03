"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { getUserByUsername } from "/js/renderers/users.js";

let comments = [
	{
		text: "Comentario de ejemplo",
		user: "@usuario1",
		rating: "4.5",
		date: "20/06/2021",
	},
	{
		text: "Comentario de ejemplo 2",
		user: "@usuario2",
		rating: "1",
		date: "20/06/2021",
	},
	{
		text: "Comentario de ejemplo 3",
		user: "@usuario1",
		rating: "3.4",
		date: "20/06/2021",
	},
];

const commentRenderer = {
	asCard: function (comment) {
		let user = getUserByUsername(comment.user);
		let rating = comment.rating;

		// CALCS FOR STAR RATINGS
		// Get percentage
		const starPercentage = (rating / 5) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${
			Math.round(starPercentage / 10) * 10
		}%`;

		let html = `<li class="comment">
                        <div class="profile-zone">
                            <a href="profile.html">
                                <img
                                    class="profile-photo"
                                    src=${user.avatar}
                                    alt="Avatar"
                                />
                                <p class="user">${comment.user}</p>
                            </a>
                        </div>
                        <p>${comment.text}</p>
                        <div class="rating">
                            <span class="icon stars-outer">
                                <span style="width: ${starPercentageRounded}" 
                                      class="icon stars-inner"></span>
                            </span>
                        </div>
                    </li>`;

		let card = parseHTML(html);
		return card;
	},
	asDetail: function () {
		//TODO
	},
};

export { comments };
export { commentRenderer };
