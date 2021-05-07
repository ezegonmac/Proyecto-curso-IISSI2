"use strict";

const commentValidator = {
	validateNewComment: function (formData) {
		let errors = [];

		let rating = formData.get("rating");
		let text = formData.get("text");

		return errors;
	},
	validateModifyComment: function (formData) {
		let errors = [];

		let rating = formData.get("rating");
		let text = formData.get("text");

		return errors;
	},
};

export { commentValidator };
