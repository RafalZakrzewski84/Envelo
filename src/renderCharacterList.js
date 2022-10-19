/** @format */

import createHtmlElement from './helpers/createHtmlElement.js';
import renderCharacterListInfo from './renderCharacterListInfo.js';
import renderCharacterDetail from './renderCharacterDetail.js';

export default function (
	renderData,
	mainCharactersList,
	mainCharactersDetails,
	msg
) {
	renderCharacterListInfo(mainCharactersList, msg);
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
