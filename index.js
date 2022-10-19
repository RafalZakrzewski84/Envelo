/** @format */
import { apiurl } from './src/helpers/constants.js';
import getCharacters from './src/helpers/getCharacters.js';
import clearCharacterList from './src/helpers/clearCharacterList.js';

import renderCharacterList from './src/renderCharacterList.js';

/*
Aplikacja ma za zadanie wyświetlić postacie z serialu Rick i Morty, pobrane z dedykowanego
API (https://rickandmortyapi.com/documentation). Po kliknięciu w nazwę postaci powinny
pojawić się nam jej szczegóły (imię, status oraz mały obrazek) w odpowiednim miejscu. Po
kliknięciu w obrazek w szczegółach powinien on zostać wyświetlony w większym oknie
dialogowym. Dodatkowo mamy przyciski, po kliknięciu których możemy odfiltrowywać
lokalnie (nie potrzebujemy dodatkowych strzałów do API) listę postaci o statusie
żywy/martwy lub wrócić do wyświetlenia wszystkich niezależnie od statusu.
W aplikacji mamy też stronicowanie dzięki czemu możemy pobierać inne listy postaci
wpisując odpowiednią liczbę do inputa.
Zadanie polega na naprawie błędów w aplikacji, ich wskazania oraz przebudowie tak, by kod
był jak najwyższej jakości.
Punkty są przyznawane za naprawę błędów, zalepieniu dziur w kodzie tak by aplikacja
działała niezależnie od działań użytkownika oraz za jakość kodu.
WAŻNE! Daj z siebie wszystko! Nawet jeśli nie naprawisz wszystkich błędów, nadal chcemy
zobaczyć jak podszedłeś(aś) do zadania. Nie szukamy perfekcji!
Link: https://stackblitz.com/edit/js-bh2axq (klikając w przycisk fork otrzymasz swoją kopię
kodu, na którym możesz pracować, pamiętaj by wcześniej się zalogować)
Rozwiązanie prześlij wykorzystując również platformę Stackblitz, link do Twojego
rozwiązania w zupełności wystarczy!
*/

//move it to index.html to title tag
document.title = 'prework';

//I moved here all DOM variables delarations here
const searchInput = document.getElementById('search-input');
const searchInputSpan = document.getElementById('search-input-span');
const mainCharactersList = document.getElementById('main-chracters-list');
const mainCharactersDetails = document.getElementById('main-chracters-details');
const headerAllBtn = document.getElementById('headerAllBtn');
const headerAliveBtn = document.getElementById('headerAliveBtn');
const headerDeadBtn = document.getElementById('headerDeadBtn');

//getCharacters function to separet file
//It contain unnessesary variable loading - removed

(async () => {
	//unnessesary variable loading - removed
	let data = await getCharacters(apiurl);
	console.log(data.results);

	searchInputSpan.innerText = data.info.pages;

	//was ()=>{} should be common fnc to use this
	searchInput.addEventListener('change', async function () {
		data = await getCharacters(apiurl, this.value);
		console.log(data.results);
	});

	function showAliveCharacters() {
		clearCharacterList(mainCharactersList);
		//I used filter method
		const aliveList = data.results.filter((res) => res.status === 'Alive');
		renderCharacterList(aliveList, mainCharactersList, mainCharactersDetails);
	}

	function showDeadCharacters() {
		clearCharacterList(mainCharactersList);
		//I used filter method
		const deadList = data.results.filter((res) => res.status === 'Dead');
		renderCharacterList(deadList, mainCharactersList, mainCharactersDetails);
	}

	function showAllCharacters() {
		clearCharacterList(mainCharactersList);
		renderCharacterList(
			data.results,
			mainCharactersList,
			mainCharactersDetails
		);
	}

	//wrong functions were assign to event listeners
	headerDeadBtn.addEventListener('click', showDeadCharacters);
	headerAliveBtn.addEventListener('click', showAliveCharacters);
	headerAllBtn.addEventListener('click', showAllCharacters);

	// adding results to DOM!
	renderCharacterList(data.results, mainCharactersList, mainCharactersDetails);
})();
