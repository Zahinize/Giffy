import { RESPONSE_LIMIT, API_KEY } from './consts/index';

const generateRandomNumber = limit => {
	return Math.floor(Math.random() * limit);
};

const fetchGifs = params => {
	const { data, API_URL } = params;

	const url = new URL(`${window.location.protocol}//${API_URL}`);

	url.search = new URLSearchParams({
		api_key: API_KEY,
		limit: RESPONSE_LIMIT,
		...data
	});

	return fetch(url).then(response => response.json());
};

export { generateRandomNumber, fetchGifs };
