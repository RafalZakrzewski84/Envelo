/** @format */

//component used in renderCharacterList

import createHtmlElement from './helpers/createHtmlElement.js';
import createImgElement from './helpers/createImgElement.js';
import renderDialog from './renderDialog.js';

export default function (index, renderData, mainCharactersDetailsContainer) {
	// remove renderData[index];
	const detailContainer = createHtmlElement('div');
	const detailItem = createHtmlElement('div');
	const name = createHtmlElement('p', `IMIĘ: ${renderData[index].name}`);
	const gender = createHtmlElement('p', `PŁEĆ: ${renderData[index].gender}`);
	const status = createHtmlElement('p', `STATUS: ${renderData[index].status}`);
	const image = createImgElement(
		'img',
		renderData[index].image,
		renderData[index].name
	);

	detailContainer.classList.add('main-characters-details-container');
	detailItem.classList.add('main-characters-details-item');

	detailItem.append(name, gender, status, image);
	detailContainer.append(detailItem);
	mainCharactersDetailsContainer.append(detailContainer);

	image.addEventListener('click', function () {
		renderDialog(index, renderData);
	});
}
