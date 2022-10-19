/** @format */
import clearCharacterList from './clearCharacterList.js';
import renderCharacterList from '../renderCharacterList.js';

export default function (
	dataToFilter,
	mainCharactersList,
	mainCharactersDetails,
	whatShow
) {
	clearCharacterList(mainCharactersList);
	let filteredList = [];
	let msg = '';

	if (whatShow === 'All') {
		//pass data to render all characters
		filteredList = dataToFilter;
		msg = 'wszystkich';
	} else {
		//pass filtered data to render
		filteredList = dataToFilter.filter((res) => res.status === whatShow);
		msg = whatShow === 'Alive' ? 'żyjących' : 'martwych';
	}

	renderCharacterList(
		filteredList,
		mainCharactersList,
		mainCharactersDetails,
		msg
	);
}
