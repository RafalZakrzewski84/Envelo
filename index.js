/** @format */
import { apiurl } from './src/helpers/constants.js';
import getCharacters from './src/helpers/getCharacters.js';
import showCharacters from './src/helpers/showCharacters.js';

//My comments and fixed bugs:
//- I added some styles in CSS
//- In index.html I changed structure, added some classes and ids. I added container for character detail items.
//- document.title = 'prework' moved to index.html to title tag.
//- I moved variables taken fom DOM to the beginning of file, and got them by id.
//- I moved getCharacters function to separate file and used it in lines 33 and 46.
//- In getCharacters function I added try catch block for error handling
//- Unnecessary variables loading - removed
//- In inputs event listener ()=>{} changed to function(){} to use this
//- showCharacters functions are rendering elements based on search conditions
//- Filter data to render using array filter method instead of forEach
//- I create HTML elements using functions createHtmlElement and createImgElement
//- I fixed Lp value in the list index + 1 , there was string instead of number
//- I removed  stand alone renderData[index], unnecessary in code;
//- In dialog I'm creating new image to prevent disappearing img in character detail item
//- I changed dialog.close() to  remove() - for cleaning DOM from unnecessary elements

const searchInput = document.getElementById('search-input');
const searchInputSpan = document.getElementById('search-input-span');
const mainCharactersList = document.getElementById('main-characters-list');
const mainCharactersDetailsContainer = document.getElementById(
	'main-characters-details-container'
);
const headerAllBtn = document.getElementById('headerAllBtn');
const headerAliveBtn = document.getElementById('headerAliveBtn');
const headerDeadBtn = document.getElementById('headerDeadBtn');

(async () => {
	let data = await getCharacters(apiurl);

	//first characters list rendering
	showCharacters(
		data.results,
		mainCharactersList,
		mainCharactersDetailsContainer,
		'All'
	);
	//adding info about max possible page number
	searchInputSpan.innerText = data.info.pages;

	searchInput.addEventListener('change', async function () {
		data = await getCharacters(apiurl, this.value);
		//render character list when input change
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'All'
		);
	});

	//showing only dead characters
	headerDeadBtn.addEventListener('click', function () {
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'Dead'
		);
	});
	//showing only alive characters
	headerAliveBtn.addEventListener('click', function () {
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'Alive'
		);
	});
	//showing all characters
	headerAllBtn.addEventListener('click', function () {
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'All'
		);
	});
})();
