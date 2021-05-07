"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { getUserByUsername } from "/js/renderers/users.js";

let photos = [
	{
		title: "Samoyed",
		description: "A very good boy",
		url: "https://source.unsplash.com/250x250",
		user: "@usuario1",
		valoration: "3.5",
		date: "10/02/2020",
	},
	{
		title: "Samoyed2",
		description: "A very good boy",
		url: "https://source.unsplash.com/251x250",
		user: "@usuario1",
		valoration: "4.5",
		date: "10/02/2020",
	},
	{
		title: "Samoyed3",
		description: "A very good boy",
		url: "https://source.unsplash.com/252x250",
		user: "@usuario1",
		valoration: "4",
		date: "10/02/2020",
	},
	{
		title: "Samoyed4",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x250",
		user: "@usuario1",
		valoration: "1",
		date: "10/02/2020",
	},
	{
		title: "Samoyed5",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x251",
		user: "@usuario1",
		valoration: "5",
		date: "10/02/2020",
	},
	{
		title: "Samoyed6",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x252",
		user: "@usuario1",
		valoration: "1",
		date: "10/02/2020",
	},
	{
		title: "Samoyed7",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x253",
		user: "@usuario1",
		valoration: "3",
		date: "10/02/2020",
	},
	{
		title: "Samoyed8",
		description: "A very good boy",
		url: "https://source.unsplash.com/252x253",
		user: "@usuario1",
		valoration: "2.3",
		date: "10/02/2020",
	},
	{
		title: "Samoyed9",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x252",
		user: "@usuario1",
		valoration: "1",
		date: "10/02/2020",
	},
	{
		title: "Samoyed10",
		description: "A very good boy",
		url: "https://source.unsplash.com/255x253",
		user: "@usuario1",
		valoration: "3",
		date: "10/02/2020",
	},
	{
		title: "Samoyed11",
		description: "A very good boy",
		url: "https://source.unsplash.com/256x253",
		user: "@usuario1",
		valoration: "4.5",
		date: "10/02/2020",
	},
];

const photoRenderer = {
	asCard: function (photo) {
		let user = getUserByUsername(photo.user);
		let html = `<div class="col">
                        <a class="photo-card" href="photo_details.html">
                            <img class="card-image" 
                                 src=${photo.url}>
                            <div class="card-text">
                                <h5>${photo.title}</h5>
                                <p>${photo.description}</p>
                            </div>
                            <img class="avatar" 
                                 src=${user.avatar}>
                        </a>
                    </div>`;

		let card = parseHTML(html);
		return card;
	},
	asDetail: function (photo) {
		let user = getUserByUsername(photo.user);

		// CALCS FOR STAR RATINGS
		// Get percentage
		let rating = photo.valoration;
		const starPercentage = (rating / 5) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${
			Math.round(starPercentage / 10) * 10
		}%`;

		let html1 = `<div id="title-card" class="top-section">
						<a href="profile.html">
							<img id="avatar"
								class="profile_photo"
								src=${user.avatar}
								alt="profile_photo">
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
		return [title_card, img_card, val_card, desc_card];
	},
};

export { photos };
export { photoRenderer };
