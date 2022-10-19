/** @format */

export default function createHtmlElement(htmlTag, src = '', alt = 'No image') {
	const element = document.createElement(htmlTag);
	element.src = src;
	element.alt = alt;
	return element;
}
