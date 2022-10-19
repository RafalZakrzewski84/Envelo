/** @format */

import createHtmlElement from './helpers/createHtmlElement.js';
import createImgElement from './helpers/createImgElement.js';

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

		character.addEventListener('click', () => {
			// remove renderData[index];
			const detailContainer = createHtmlElement('div');
			const name = createHtmlElement('div', `Imie: ${renderData[index].name}`);
			const gender = createHtmlElement(
				'div',
				`Płeć: ${renderData[index].gender}`
			);
			const status = createHtmlElement(
				'div',
				`Status: ${renderData[index].status}`
			);
			const image = createImgElement(
				'img',
				renderData[index].image,
				renderData[index].name
			);
			// image.width = '100' -moved to css

			detailContainer.classList.add('main-characters-details-container');
			image.src = renderData[index].image;

			detailContainer.append(name, gender, status, image);
			mainCharactersDetails.append(detailContainer);

			image.addEventListener('click', function () {
				// creating elements and new image for dialog to prevent removing img in detail list
				const dialog = createHtmlElement('dialog');
				const dialogImg = createImgElement(
					'img',
					renderData[index].image,
					renderData[index].name
				);
				const closeBtn = createHtmlElement('button', 'Zamknij');

				dialog.append(dialogImg, closeBtn);
				document.body.append(dialog);

				dialog.showModal();

				closeBtn.addEventListener('click', function () {
					dialog.close();
				});
			});
		});
	}
}
