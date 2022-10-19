/** @format */
import { apiurl } from './src/helpers/constants.js';
import getCharacters from './src/helpers/getCharacters.js';
import showCharacters from './src/helpers/showCharacters.js';

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

//document.title = 'prework' moved to index.html to title tag

//I moved here all DOM variables delarations here
const searchInput = document.getElementById('search-input');
const searchInputSpan = document.getElementById('search-input-span');
const mainCharactersList = document.getElementById('main-characters-list');
const mainCharactersDetailsContainer = document.getElementById(
	'main-characters-details-container'
);
const headerAllBtn = document.getElementById('headerAllBtn');
const headerAliveBtn = document.getElementById('headerAliveBtn');
const headerDeadBtn = document.getElementById('headerDeadBtn');

//getCharacters function to separet file
//It contain unnessesary variable loading - removed

(async () => {
	//unnessesary variable loading - removed
	let data = await getCharacters(apiurl);

	//first rendering
	showCharacters(
		data.results,
		mainCharactersList,
		mainCharactersDetailsContainer,
		'All'
	);
	//adding info about max posible page
	searchInputSpan.innerText = data.info.pages;

	//was ()=>{} should be common fnc to use this
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

	//wrong functions were assign to event listeners
	//showing only dead charctrs
	headerDeadBtn.addEventListener('click', function () {
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'Dead'
		);
	});
	//showing only alive charctrs
	headerAliveBtn.addEventListener('click', function () {
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'Alive'
		);
	});
	//showing all charctrs
	headerAllBtn.addEventListener('click', function () {
		showCharacters(
			data.results,
			mainCharactersList,
			mainCharactersDetailsContainer,
			'All'
		);
	});
})();
