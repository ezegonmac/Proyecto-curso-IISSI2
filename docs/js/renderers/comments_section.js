"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { commentRenderer } from "/js/renderers/comments.js";
import { commentsAPI } from "/js/api/comments.js";

let commentsSectionRenderer = {
	asList: function (photoId) {
		let commentsContainer = parseHTML(`<ul id="comments-card"></ul>`);

		commentsAPI
			.getByPhotoId(photoId)
			.then((comments) => {
				for (let comment of comments) {
					let card = commentRenderer.asCard(comment);
					commentsContainer.appendChild(card);
				}
			})
			.catch((errors) => console.error(errors));

		return commentsContainer;
	},
};

export { commentsSectionRenderer };
