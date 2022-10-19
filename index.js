/** @format */
import { apiurl } from './src/helpers/constants.js';
import getCharacters from './src/helpers/getCharacters.js';
import showCharacters from './src/helpers/showCharacters.js';

//My comments and fixed bugs:
//- I added some styles in CSS
//- In index.html I changed structure, added some classes and ids. I added container for character detail items.
//- document.title = 'prework' moved to index.html to title tag.
//- I moved variables taken fom DOM to the beginning of file, and get them by id.
//- I moved getCharacters function to separate file and used it in 2 places.
//- In getCharacters function I added try catch block for error handling
//- Unnecessary variables loading - removed
//- In inputs event listener was ()=>{} changed to function(){} for using this
//- showCharacters functions are rendering elements base on search conditions
//- I create HTML elements using functions createHtmlElement and createImgElement
//- I fixed Lp value in list index + 1 was string instead of number
//- I removed  stand alone renderData[index], unnecessary in code;

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
	//adding info about max possible page
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
