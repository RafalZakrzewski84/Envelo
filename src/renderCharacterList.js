/** @format */

export default function (
	renderData,
	mainCharactersList,
	mainCharactersDetails
) {
	for (let index in renderData) {
		const p = document.createElement('p');
		const lp = document.createElement('span');

		//fixing index was string insted of number
		lp.innerText = `${+index + 1}`;
		const text = document.createTextNode(' ' + renderData[index].name);
		p.prepend(lp, text);

		mainCharactersList.append(p);

		p.addEventListener('click', () => {
			renderData[index];
			const n = document.createElement('div');
			const gender = document.createElement('div');
			const status = document.createElement('div');
			const jpg = document.createElement('img');
			jpg.width = '100';

			n.innerText = 'imie: ' + renderData[index].name;
			gender.innerText = 'płeć: ' + renderData[index].gender;
			status.innerText = 'status: ' + renderData[index].status;
			jpg.src = renderData[index].image;

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
}
