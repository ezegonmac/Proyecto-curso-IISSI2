"use strict";

import { languageAPI } from "/js/api/language.js";
import { messageRenderer } from "/js/renderers/messages.js";

let checkInappropiateLanguage = function (text) {
	let errors = [];

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
		})
		.catch((error) => {
			console.error(error);
		});
};

export { checkInappropiateLanguage };
