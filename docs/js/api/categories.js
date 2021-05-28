" use_strict ";

import { BASE_URL, requestOptions } from "./common.js";

const categoriesAPI = {
	getAll: function () {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/categories`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getById: function (categorieId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(`${BASE_URL}/categories/${categorieId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	getByPhotoId: function (photoId) {
		return new Promise(function (resolve, reject) {
			axios
				.get(
					`${BASE_URL}/categories/photoId/${photoId}`,
					requestOptions
				)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	create: function (name) {
		return new Promise(function (resolve, reject) {
			axios
				.post(`${BASE_URL}/categories/create/${name}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	addCategorieToPhoto: function (photoId, categorieId) {
		return new Promise(function (resolve, reject) {
			axios
				.post(
					`${BASE_URL}/categories/add/${photoId}/${categorieId}`,
					requestOptions
				)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	update: function (categorieId, formData) {
		return new Promise(function (resolve, reject) {
			axios
				.put(
					`${BASE_URL}/categories/${categorieId}`,
					formData,
					requestOptions
				)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
	delete: function (categorieId) {
		return new Promise(function (resolve, reject) {
			axios
				.delete(`${BASE_URL}/categories/${categorieId}`, requestOptions)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.response.data.message));
		});
	},
};

export { categoriesAPI };
