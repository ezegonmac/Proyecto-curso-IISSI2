"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";

const commentRenderer = {
	asCard: function (comment) {
		let rating = comment.valoration;

		// CALCS FOR STAR RATINGS
		// Get percentage
		const starPercentage = (rating / 5) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${
			Math.round(starPercentage / 10) * 10
		}%`;

		let html = `<li class="comment">
                        <div class="profile-zone">
                            <a href="profile.html?userId=${comment.userId}">
                                <img
                                    class="avatar"
                                />
                                <p class="username"></p>
                            </a>
                        </div>
						<div class="comment-zone" 
							 data-toggle="modal" 
							 data-target="#com-details-modal">
							<a>
								<p>${comment.comment}</p>
								<div class="rating">
									<span class="icon stars-outer">
										<span style="width: ${starPercentageRounded}" 
											class="icon stars-inner"></span>
									</span>
								</div>
							</a>
						</div>
                    </li>`;

		let card = parseHTML(html);
		loadUserCard(card, comment.userId);
		return card;
	},
	asDetail: function (comment) {
		let user = usersAPI
			.getById(comment.userId)
			.catch((error) => console.error(error));
		let rating = comment.rating;

		// CALCS FOR STAR RATINGS
		// Get percentage
		const starPercentage = (rating / 5) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${
			Math.round(starPercentage / 10) * 10
		}%`;

		let html = `<div id="com-details-modal" class="modal-content">
						<div class="modal-header">
							<button
								type="button"
								id="btn-close"
								class="btn-close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<i class="fa fa-close"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="profile-zone">
								<a href="profile.html">
									<img
										class="profile-photo"
										src=${user.avatar}
										alt="Avatar"
									/>
									<p class="user">${user.username}</p>
								</a>
							</div>
							<form id="mod-com-form">
								<div class="mb-3">
									<label
										for="recipient-name"
										class="col-form-label"
										>Valoration:</label
									>
									<input
										id="rating-control"
										class="form-control"
										type="number"
										step="0.1"
										min="0"
										max="5"
										placeholder="${comment.rating}"
										disabled
									/>
								</div>
								<label
								for="recipient-name"
								class="col-form-label"
								>Comment:</label
								>
								<textarea
									id="message-text"
									class="form-control"
									disabled
								>${comment.text}
								</textarea>
							</form>
							<p class="date">Posting date: ${comment.date}</p>
						</div>
						<div class="modal-footer">
							<button id="mod-com-btn"
									type="button" 
									class="btn btn-primary"
							>Post
							</button>
						</div>
					</div>`;

		let card = parseHTML(html);
		return card;
	},
};

function loadUserCard(card, userId) {
	usersAPI.getById(userId).then((users) => {
		let user = users[0];
		let avatar = card.querySelector("img.avatar");
		avatar.src = user.avatar;

		let username = card.querySelector("p.username");
		username.textContent = user.username;
	});
}

export { commentRenderer, loadUserCard };
