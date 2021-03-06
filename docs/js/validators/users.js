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
				"First and last name should have more than 3 characters "
			);
		}
		if (passwd !== passwd2) {
			errors.push("Passwords must match");
		}
		if (passwd > 6) {
			errors.push("Password must be at least 6 characters long");
		}
		if (!/\d/.test(passwd)) {
			errors.push("Password must contains at least one number");
		}
		if (!/[a-z]/.test(passwd)) {
			errors.push(
				"Password must contains at least one lower case letter"
			);
		}
		if (!/[A-Z]/.test(passwd)) {
			errors.push(
				"Password must contains at least one upper case letter"
			);
		}
		if (phone.length != 9) {
			errors.push("Phone number must be 9 characters long");
		}

		return errors;
	},
	validateLogin: function (formData) {
		let errors = [];
		return errors;
	},
};

export { userValidator };
