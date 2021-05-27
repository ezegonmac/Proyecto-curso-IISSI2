"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const followersAPI = {
	getNumByIds: function (followerId, followingId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(
					`${BASE_URL}/followers/${followerId}/${followingId}`,
					requestOptions
				)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	create: function (formData) {
		return new Promise(function (resolve, reject) {
			axios
				.post(`${BASE_URL}/followers`, formData, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	delete: function (followerId, followingId) {
		return new Promise(function (resolve, reject) {
			axios
				.delete(
					`${BASE_URL}/followers/${followerId}/${followingId}`,
					requestOptions
				)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
};

export { followersAPI };
