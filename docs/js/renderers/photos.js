"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";

const photoRenderer = {
	asCard: function (photo) {
		let html = `<div class="col">
						<a class="photo-card" href="photo_details.html?photoId=${photo.photoId}">
							<img class="card-image" 
								src=${photo.url}>
							<div class="card-text">
								<h5>${photo.title}</h5>
								<p>${photo.description}</p>
							</div>
							<img class="avatar" >
						</a>
					</div>`;

		let card = parseHTML(html);

		return card;
	},
	asDetail: function (photo) {
		// CALCS FOR STAR RATINGS
		// Get percentage
		let rating = photo.valoration;
		const starPercentage = (rating / 5) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${
			Math.round(starPercentage / 10) * 10
		}%`;

		let html1 = `<div id="title-card" class="top-section">
						<a href="profile.html?userId=${photo.userId}">
							<img class="avatar">
						</a>
						<p>${photo.title}</p>
					</div>`;

		let html2 = `<div id="photo-card" class="bottom-section">
						 <img class="full-photo" src=${photo.url}>
					 </div>`;

		let html3 = `<div id="valoration-card" class="top-section">
						<div class="valoration">
							<span class="icon stars-outer">
								<span style="width: ${starPercentageRounded}" 
									class="icon stars-inner"></span>
							</span>
						</div>
					</div>`;

		let html4 = `<div id="bottom-card">
						<p>${photo.description}</p>
						<p class="date">Upload Date: ${photo.date}</p>
						<div class="button-container">
							<button id="mod-photo-button" class="button large-button"
							>Modify Photo
							</button>
						</div>
					</div>`;

		let title_card = parseHTML(html1);
		let img_card = parseHTML(html2);
		let val_card = parseHTML(html3);
		let desc_card = parseHTML(html4);
		loadUsernameCard(title_card, photo.userId);
		return [title_card, img_card, val_card, desc_card];
	},
	asMiniCard: function (photo) {
		// container
		let html = `<div class="col-md">
						<a class="mini-card photo-card" href="/photo_details.html?photoId=${photo.photoId}">
							<img
								class="card-image"
								src=${photo.url}
							/>
							<img class="avatar"/>
						</a>
						<p class="punctuation">${photo.valoration}</p>
						<p class="comments">300</p>
					</div>`;

		let card = parseHTML(html);

		return card;
	},
};

function loadUsernameCard(card, userId) {
	usersAPI.getById(userId).then((users) => {
		let user = users[0];
		let avatar = card.querySelector("img.avatar");
		avatar.src = user.avatar;
	});
}

export { photoRenderer, loadUsernameCard };
