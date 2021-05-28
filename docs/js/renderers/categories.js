"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const categorieRenderer = {
	asMiniCard: function (categorie) {
		let html = `<div class="col-md">
                        <a class="mini-card" href="#">
                            <p>#${categorie.name}</p>
                        </a>
                        <p class="times_used"
                        >${categorie.timesUsed}
                        </p>
                    </div>`;

		let card = parseHTML(html);
		return card;
	},
	asFormItem: function (categorie) {
		let html = `<option value="${categorie.categorieId}">
						<p id="form_name">#${categorie.name} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
						<p id="form_timesUsed">${categorie.timesUsed}</p>
					</option>`;

		let card = parseHTML(html);
		return card;
	},
	asTextContainer: function (categorie) {
		let html = `<p>#${categorie.name}</p>`;

		let card = parseHTML(html);
		return card;
	},
};

export { categorieRenderer };
