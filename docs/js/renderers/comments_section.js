"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { commentRenderer } from "/js/renderers/comments.js";

let commentsSectionRenderer = {
	asList: function (comments) {
		let commentsContainer = parseHTML(`<ul id="comments-card"></ul>`);

		for (let comment of comments) {
			let card = commentRenderer.asCard(comment);
			commentsContainer.appendChild(card);
		}
		return commentsContainer;
	},
};

export { commentsSectionRenderer };
