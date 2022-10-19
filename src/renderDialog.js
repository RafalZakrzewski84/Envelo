/** @format */

//component used in renderCharacterDetail

import createHtmlElement from './helpers/createHtmlElement.js';
import createImgElement from './helpers/createImgElement.js';

export default function (index, renderData) {
	// creating elements and new image for dialog to prevent removing img in character detail container
	const dialog = createHtmlElement('dialog');
	const dialogImg = createImgElement(
		'img',
		renderData[index].image,
		renderData[index].name
	);
	const closeBtn = createHtmlElement('button', 'Zamknij');

	//appending element to DOM
	dialog.append(dialogImg, closeBtn);
	document.body.append(dialog);

	dialog.showModal();

	//event for closing dialog window
	closeBtn.addEventListener('click', function () {
		//close change to remove
		dialog.remove();
	});
}
