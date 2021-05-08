"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";

let users = [
	{
		username: "@usuario1",
		name: "nombre",
		surnames: "surnombres",
		avatar: "/images/profile_photo.png",
		tlf: 600709456,
		followers: 77234,
		following: 190,
	},
	{
		username: "@usuario2",
		name: "nombre",
		surnames: "surnombres",
		avatar: "/images/profile_photo.png",
		tlf: 600709456,
		followers: 1234,
		following: 190,
	},
	{
		username: "@usuario3",
		name: "nombre",
		surnames: "surnombres",
		avatar: "/images/profile_photo.png",
		tlf: 600709456,
		followers: 2334,
		following: 190,
	},
	{
		username: "@usuario4",
		name: "nombre",
		surnames: "surnombres",
		avatar: "/images/profile_photo.png",
		tlf: 600709456,
		followers: 23344,
		following: 190,
	},
	{
		username: "@usuario5",
		name: "nombre",
		surnames: "surnombres",
		avatar: "/images/profile_photo.png",
		tlf: 600709456,
		followers: 23434,
		following: 190,
	},
	{
		username: "@usuario6",
		name: "nombre",
		surnames: "surnombres",
		avatar: "/images/profile_photo.png",
		tlf: 600709456,
		followers: 23434,
		following: 190,
	},
];

const userRenderer = {
	asProfile: function (user) {
		let html1 = `<div id="profile-card" class="col-md-6">
                        <div id="avatar-card">
                            <img class="avatar" src=${user.avatar} />
                            <p id="username">${user.username}</p>
                        </div>
                        <div id="details-card">
                            <p class="name">${user.name}</p>
                            <p class="surnames">${user.surnames}</p>
                        </div>
                     </div>`;

		let html2 = `<div id="follow-card" class="col-md-3">
                        <div id="followers-card">
                            <div id="followers">
                                <p>Followers</p>
                                <p class="value">${user.followers}</p>
                            </div>
                            <div id="following">
                                <p>Following</p>
                                <p class="value">${user.following}</p>
                            </div>
                        </div>
                        <button class="button">Follow</button>
                    </div>`;

		let card1 = parseHTML(html1);
		let card2 = parseHTML(html2);

		return [card1, card2];
	},
	asMenuItem: function (user) {
		let html1 = `<p class="text" >${user.username}</p>`;
		let html2 = `<img class="profile-photo"
                          src=${user.avatar} 
                          alt="profile_photo">`;

		let card1 = parseHTML(html1);
		let card2 = parseHTML(html2);

		return [card1, card2];
	},
	asCard: function (user) {},
	asMiniCard: function (user) {
		let html = `<div class="col-md">
						<a class="mini-card photo-card" href="/profile.html">
							<img
								class="card-image"
								src="https://source.unsplash.com/252x253"
							/>
							<img
								class="big-avatar"
								src=${user.avatar}
							/>
						</a>
						<p class="comments"> 300 </p>
						<p class="followers">${user.followers}</p>
					</div>`;

		let card = parseHTML(html);
		return card;
	},
};

function getUserByUsername(username) {
	for (let user of users) {
		if (username == user.username) {
			return user;
		}
	}
	console.error("There aren't any user with this username");
	return null;
}

export { users };
export { userRenderer };
export { getUserByUsername };
