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
		text:
			"Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 v  Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3 Comentario de ejemplo 3",
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
						<div class="comment-zone" 
							 data-toggle="modal" 
							 data-target="#com-details-modal">
							<a>
								<p>${comment.text}</p>
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
		return card;
	},
	asDetail: function (comment) {
		let user = getUserByUsername(comment.user);
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

export { comments };
export { commentRenderer };
