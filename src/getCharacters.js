/** @format */

export default async function (url) {
	try {
		const response = await fetch(url, {
			method: 'GET',
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
