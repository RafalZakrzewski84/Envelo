/** @format */
import { apiurl } from './src/helpers/constants.js';
import getCharacters from './src/helpers/getCharacters.js';
import clearCharacterList from './src/helpers/clearCharacterList.js';

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

const searchInput = document.getElementById('search-input');
const searchInputSpan = document.getElementById('search-input-span');
const mainCharactersList = document.getElementById('main-chracters-list');
const mainCharactersDetails = document.getElementById('main-chracters-details');
const headerAllBtn = document.getElementById('headerAllBtn');
const headerAliveBtn = document.getElementById('headerAliveBtn');
const headerDeadBtn = document.getElementById('headerDeadBtn');

//getCharacters function to separet file it contain unnessesary variable loading

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

	function getOnlyAlives() {
		clearCharacterList(mainCharactersList);

		data.results.forEach((res, index) => {
			if (res.status === 'Alive') {
				data.results.splice(index, 1);
			}
		});
		console.log(data.results);
		//todo render filtered results!
	}

	function deadsOnly() {
		clearCharacterList(mainCharactersList);

		data.results.forEach((res, index) => {
			if (res.status === 'Dead') {
				data.results.splice(index, 1);
			}
		});
		console.log(data.results);
		//todo render filtered results!
	}

	function all2() {
		clearCharacterList(mainCharactersList);
		// todo
	}

	headerDeadBtn.addEventListener('click', getOnlyAlives);
	headerAliveBtn.addEventListener('click', deadsOnly);
	headerAllBtn.addEventListener('click', all2);

	// adding results to DOM!
	for (let index in data.results) {
		const p = document.createElement('p');
		const lp = document.createElement('span');

		//fixing index was string insted of number
		lp.innerText = `${+index + 1}`;
		const text = document.createTextNode(' ' + data.results[index].name);
		p.prepend(lp, text);

		mainCharactersList.append(p);

		p.addEventListener('click', () => {
			data.results[index];
			const n = document.createElement('div');
			const gender = document.createElement('div');
			const status = document.createElement('div');
			const jpg = document.createElement('img');
			jpg.width = '100';

			n.innerText = 'imie: ' + data.results[index].name;
			gender.innerText = 'płeć: ' + data.results[index].gender;
			status.innerText = 'status: ' + data.results[index].status;
			jpg.src = data.results[index].image;

			mainCharactersDetails.append(n, gender, status, jpg);

			jpg.onclick = () => {
				const dialog = document.createElement('dialog');
				document.body.append(dialog);

				dialog.append(jpg);
				jpg.width = 300;

				dialog.showModal();

				const close = document.createElement('button');

				close.innerText = 'zamknij';

				close.addEventListener('click', () => {
					dialog.close();
				});

				dialog.append(close);
			};
		});
	}
})();
