" use_strict ";

import { BASE_URL, requestOptions } from "./common.js";

const commentsAPI = {
	getAll: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/comments`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getById: function (commentId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/comments/${commentId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getByPhotoId: function (photoId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/comments?photoId=${photoId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
		// TODO
	},
};

export { commentsAPI };
