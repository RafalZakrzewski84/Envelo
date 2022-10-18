/** @format */

export default async function (url, pageNum = 1) {
	try {
		const response = await fetch(url + '?page=' + pageNum);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
