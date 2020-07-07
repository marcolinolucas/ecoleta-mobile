import axios from 'axios';

const API = axios.create({
	baseURL: 'http://192.168.1.18:3333',
});

async function getItems() {
	try {
		const { data } = await API.get('/items');
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
}

async function getPoints({ city, uf, items }: { city: string, uf: string, items: number[] }) {
	try {
		const { data } = await API.get('/points', {
			params: {
				city,
				uf,
				items: items.join(', '),
			},
		});
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
}

async function getPointDetail({ id }: { id: number }) {
	try {
		const { data } = await API.get(`/points/${id}`);
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
}

export {
	getItems,
	getPoints,
	getPointDetail
}