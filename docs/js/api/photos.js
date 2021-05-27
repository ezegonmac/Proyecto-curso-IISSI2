" use_strict ";

import { BASE_URL, requestOptions } from "./common.js";

const photosAPI = {
	getAll: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/photos`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getById: function (photoId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/photos/${photoId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getAllFromUser: function (userId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/photos?userId=${userId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getAllOrderedByPunctuation: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/photos/valoration`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getAllOrderedByComments: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/photos/comments`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getAllFromFollowing: function (followerId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(
					`${BASE_URL}/photos/following/${followerId}`,
					requestOptions
				)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	create: function (formData) {
		return new Promise(function (resolve, reject) {
			axios
				.post(`${BASE_URL}/photos`, formData, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	update: function (photoId, formData) {
		return new Promise(function (resolve, reject) {
			axios
				.put(`${BASE_URL}/photos/${photoId}`, formData, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	delete: function (photoId) {
		return new Promise(function (resolve, reject) {
			axios
				.delete(`${BASE_URL}/photos/${photoId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
};

export { photosAPI };
