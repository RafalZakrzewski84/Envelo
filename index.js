/** @format */

const apiurl = 'https://rickandmortyapi.com/api/character';

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

document.title = 'prework';

const characters = document.querySelector('section');

async function getCharacters() {
	const response = await fetch(apiurl, {
		method: 'GET',
	});

	var loading = false;

	return await response.json();
}

(async () => {
	var loading = true;
	let { results, info } = await getCharacters();

	document.querySelector('.search > input').value = 1;
	document.querySelector('.search > span').innerText = info.pages;

	document.querySelector('.search > input').addEventListener('change', () => {
		fetch(apiurl + '?page=' + this.value)
			.then(function (res) {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				results = res.results;
			});
	});

	function getOnlyAlives() {
		characters.innerHTML = '';

		results.forEach((res, index) => {
			if (res.status === 'Alive') {
				results.splice(index, 1);
			}
		});

		//todo render filtered results!
	}

	function deadsOnly() {
		characters.innerHTML = '';

		results.forEach((res, index) => {
			if (res.status === 'Dead') {
				results.splice(index, 1);
			}
		});

		//todo render filtered results!
	}

	function all2() {
		// todo
	}

	alive.addEventListener('click', getOnlyAlives);
	dead.addEventListener('click', deadsOnly);
	all.addEventListener('click', all2);

	// adding results to DOM!
	for (let index in results) {
		const p = document.createElement('p');
		const lp = document.createElement('span');

		lp.innerText = index + 1;
		const text = document.createTextNode(' ' + results[index].name);
		p.prepend(lp, text);

		characters.append(p);

		p.addEventListener('click', () => {
			results[index];
			const n = document.createElement('div');
			const gender = document.createElement('div');
			const status = document.createElement('div');
			const jpg = document.createElement('img');
			jpg.width = '100';

			n.innerText = 'imie: ' + results[index].name;
			gender.innerText = 'płeć: ' + results[index].gender;
			status.innerText = 'status: ' + results[index].status;
			jpg.src = results[index].image;

			const details = document.querySelector('section:not(:first-child)');

			details.append(n, gender, status, jpg);

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