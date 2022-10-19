/** @format */

//used in renderCharacterList

import createHtmlElement from './helpers/createHtmlElement.js';

export default function (mainCharactersList, msg) {
	//creating elements
	const listTitle = createHtmlElement('h2', `Lista ${msg} postaci:`);
	const info = createHtmlElement(
		'p',
		'Kliknij postać by zobaczyć jej szczegóły'
	);
	//adding elements to DOM
	mainCharactersList.append(listTitle);
	mainCharactersList.append(info);
}
