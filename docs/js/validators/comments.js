"use strict";

import { languageAPI } from "/js/api/language.js";

const commentValidator = {
	validateNewComment: function (formData) {
		let errors = [];

		let text = formData.get("comment");

		text = text.toLowerCase();
		languageAPI
			.getAll()
			.then((words) => {
				for (let word of words) {
					console.log(word);
					let invalid = text.search(word.word) != -1;
					if (invalid) {
						// contains innapropiate words
						errors.push(
							"Title and description cannot contain innnapropiate words"
						);

						return errors;
					}
				}
				return errors;
			})
			.catch((error) => {
				console.error(error);
			});
	},
	validateModifyComment: function (formData) {
		let errors = [];

		let rating = formData.get("rating");
		let text = formData.get("text");

		return errors;
	},
};

function checkFormDataLanguage(formData) {
	let comment = formData.get("comment");

	checkInappropiateLanguage(comment);
}

export { commentValidator };
