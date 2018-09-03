import { _getCards, _getCampaigns } from './_data';

export function getInitialData() {
	return Promise.all([ _getCards(), _getCampaigns() ]).then(([ cards, campaigns ]) => {
		return { cards, campaigns };
	});
}
