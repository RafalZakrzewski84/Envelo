/** @format */

//component used in renderCharacterList

import createHtmlElement from './helpers/createHtmlElement.js';
import createImgElement from './helpers/createImgElement.js';
import renderDialog from './renderDialog.js';

export default function (index, renderData, mainCharactersDetailsContainer) {
	// removed renderData[index];
	const detailItem = createHtmlElement('div');
	const name = createHtmlElement('p', `IMIĘ: ${renderData[index].name}`);
	const gender = createHtmlElement('p', `PŁEĆ: ${renderData[index].gender}`);
	const status = createHtmlElement('p', `STATUS: ${renderData[index].status}`);
	const image = createImgElement(
		'img',
		renderData[index].image,
		renderData[index].name
	);

	//adding class to character item
	detailItem.classList.add('main-characters-details-item');

	//add character to DOM
	detailItem.append(name, gender, status, image);
	mainCharactersDetailsContainer.append(detailItem);

	image.addEventListener('click', function () {
		//on click render dialog window with character image
		renderDialog(index, renderData);
	});
}
