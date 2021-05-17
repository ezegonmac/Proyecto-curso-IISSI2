"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";

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
		let html = `<a id="menu_login"
					   class="menu_text"
					   href="profile.html?userId=${user.userId}">

						<p class="text" >${user.username}</p>
						<img class="profile-photo" src=${user.avatar}>
					
					</a>`;

		let card = parseHTML(html);

		return card;
	},
	asCard: function (user) {},
	asMiniCard: function (user) {
		let html = `<div class="col-md">
						<a class="mini-card photo-card" href="profile.html?userId=${user.userId}">
							<img
								class="card-image"
								src="https://source.unsplash.com/252x253"
							/>
							<img
								class="big-avatar"
								src=${user.avatar}
							/>
						</a>
						<p class="comments">${user.valoration}</p>
						<p class="followers">${user.followers}</p>
					</div>`;

		let card = parseHTML(html);
		return card;
	},
};

export { userRenderer };
