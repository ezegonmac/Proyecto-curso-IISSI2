"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const usersAPI = {
	getAll: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/users`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getById: function (userId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/users/${userId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getAllOrderedByFollowers: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/users/followers`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getAllOrderedByPunctuation: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/users/valoration`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
};

export { usersAPI };
