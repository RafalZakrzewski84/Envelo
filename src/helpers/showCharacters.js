/** @format */
import clearCharacterList from './clearCharacterList.js';
import renderCharacterList from '../renderCharacterList.js';

export default function (
	dataToFilter,
	mainCharactersList,
	mainCharactersDetailsContainer,
	whatShow
) {
	//clearing characters list before rendering
	clearCharacterList(mainCharactersList);
	let filteredList = [];
	let msg = '';

	if (whatShow === 'All') {
		//pass data to render all characters
		filteredList = dataToFilter;
		msg = 'wszystkich';
	} else {
		//pass filtered data to render base on criteria
		filteredList = dataToFilter.filter((res) => res.status === whatShow);
		msg = whatShow === 'Alive' ? 'żyjących' : 'martwych';
	}

	//render characters list
	renderCharacterList(
		filteredList,
		mainCharactersList,
		mainCharactersDetailsContainer,
		msg
	);
}
