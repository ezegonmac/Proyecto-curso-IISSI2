"use strict";

const photoValidator = {
	validateNewPhoto: function (formData) {
		let errors = [];

		let title = formData.title;
		let description = formData.description;
		let image = formData.image;

		return errors;
	},
	validateModPhoto: function (formData) {
		let errors = [];

		let title = formData.title;
		let description = formData.description;

		return errors;
	},
};

export { photoValidator };
