"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

let categories = [
	{
		name: "#categorie1",
		times_used: "345",
	},
	{
		name: "#categorie2",
		times_used: "3445",
	},
	{
		name: "#categorie3",
		times_used: "3465",
	},
	{
		name: "#categorie4",
		times_used: "3435",
	},
	{
		name: "#categorie5",
		times_used: "34325",
	},
	{
		name: "#categorie6",
		times_used: "34359",
	},
];

const categorieRenderer = {
	asMiniCard: function (categorie) {
		let html = `<div class="col-md">
                        <a class="mini-card" href="#">
                            <p>${categorie.name}</p>
                        </a>
                        <p class="times_used"
                        >${categorie.times_used}
                        </p>
                    </div>`;

		let card = parseHTML(html);
		return card;
	},
};

export { categorieRenderer };
export { categories };
