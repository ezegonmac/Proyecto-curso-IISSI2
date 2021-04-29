"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { getUserByName } from "/js/renderers/users.js";

let photos = [
	{
		title: "Samoyed",
		description: "A very good boy",
		url: "https://source.unsplash.com/250x250",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed2",
		description: "A very good boy",
		url: "https://source.unsplash.com/251x250",
		user: "@usuario1",
		valoration: 5,
		date: "10/02/2020",
	},
	{
		title: "Samoyed3",
		description: "A very good boy",
		url: "https://source.unsplash.com/252x250",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed4",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x250",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed5",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x251",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed6",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x252",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed7",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x253",
		user: "@usuario1",
		valoration: 2,
		date: "10/02/2020",
	},
	{
		title: "Samoyed8",
		description: "A very good boy",
		url: "https://source.unsplash.com/252x253",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed9",
		description: "A very good boy",
		url: "https://source.unsplash.com/253x252",
		user: "@usuario1",
		valoration: 8,
		date: "10/02/2020",
	},
	{
		title: "Samoyed10",
		description: "A very good boy",
		url: "https://source.unsplash.com/255x253",
		user: "@usuario1",
		valoration: 10,
		date: "10/02/2020",
	},
	{
		title: "Samoyed11",
		description: "A very good boy",
		url: "https://source.unsplash.com/256x253",
		user: "@usuario1",
		valoration: 5,
		date: "10/02/2020",
	},
];

const photoRenderer = {
	asCard: function (photo) {
		let user = getUserByName(photo.user);
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
		let user = getUserByName(photo.user);
		let html = `<div id="left-section" class="col-sm">
						<div id="left-card" class="container-md">
							<div id="title-card" class="top-section">
								<a href="profile.html">
									<img id="avatar"
										class="profile_photo"
										src=${user.avatar}
										alt="profile_photo">
								</a>
								<p>${photo.title}</p>
							</div>
								
							<div id="photo-card" class="bottom-section">
								<img class="full-photo" src=${photo.url}>
							</div>
						</div>
					</div>`;

		let card = parseHTML(html);
		return card;
	},
};

export { photos };
export { photoRenderer };
