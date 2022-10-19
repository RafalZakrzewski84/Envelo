/** @format */

import createHtmlElement from './helpers/createHtmlElement.js';
import renderCharacterDetail from './renderCharacterDetail.js';

export default function (
	renderData,
	mainCharactersList,
	mainCharactersDetails,
	msg
) {
	//creating elements
	const listTitle = createHtmlElement('h2', `Lista ${msg} postaci:`);
	const info = createHtmlElement(
		'p',
		'Kliknij postać by zobaczyć jej szczegóły'
	);
	//adding elements to DOM
	mainCharactersList.append(listTitle);
	mainCharactersList.append(info);

	for (let index in renderData) {
		//creating elements
		//fixing index + 1 was string instead of number
		const lp = createHtmlElement('span', `${+index + 1}`);
		const character = createHtmlElement('p');

		//setting attributes
		const text = document.createTextNode(' ' + renderData[index].name);
		character.prepend(lp, text);
		character.classList.add('main-characters-list-row');

		//add character to DOM
		mainCharactersList.append(character);

		character.addEventListener('click', function () {
			renderCharacterDetail(index, renderData, mainCharactersDetails);
		});
	}
}
