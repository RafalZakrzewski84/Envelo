/** @format */

export default function createHtmlElement(htmlTag, text = '') {
	const element = document.createElement(htmlTag);
	if (text !== '') {
		element.textContent = text;
	}
	return element;
}
