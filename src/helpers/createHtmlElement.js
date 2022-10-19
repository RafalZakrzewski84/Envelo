/** @format */

export default function createHtmlElement(htmlTag, text = '') {
	const element = document.createElement(htmlTag);
	element.textContent = text;
	return element;
}
