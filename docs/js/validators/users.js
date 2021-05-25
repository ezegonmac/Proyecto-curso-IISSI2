"use strict";

const userValidator = {
	validateRegister: function (formData) {
		let errors = [];

		let username = formData.get("username");
		let name = formData.get("name");
		let surnames = formData.get("surnames");
		let passwd = formData.get("password");
		let passwd2 = formData.get("c-password");
		let phone = formData.get("phone");
		let email = formData.get("email");

		if (name.length < 3 || surnames.length < 3) {
			errors.push(
				"The first and last name should have more than 3 characters "
			);
		}
		if (passwd !== passwd2) {
			errors.push("The passwords must match");
		}
		if (passwd < 6) {
			errors.push("The password must be at least 6 characters long");
		}
		if (phone.length != 9) {
			errors.push("The phone number must be 9 characters long");
		}

		return errors;
	},
};

export { userValidator };
