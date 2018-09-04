// import { _getCards, _getCampaigns } from './_data';

// This was before api, just resolves a promise with hardcoded data
// export function getInitialData() {
// 	return Promise.all([ _getCards(), _getCampaigns() ]).then(([ cards, campaigns ]) => {
// 		return { cards, campaigns };
// 	});
// }

// New API helper functions
export const getCampaigns = () => {
	return fetch('/api/campaigns').then((res) => res.json()).then((resp) => {
		return resp;
	});
};

export const getCards = () => {
	return fetch('/api/cards').then((res) => res.json()).then((resp) => {
		return resp.sort((a, b) => a.cardTitle - b.cardTitle);
	});
};

export const getFilters = () => {
	return fetch('/api/filters').then((res) => res.json()).then((resp) => {
		return resp;
	});
};
