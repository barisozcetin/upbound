import React, { Component } from 'react';

import Header from './components/Header';
import CardGrid from './components/card/CardGrid';
import Loading from './components/icons/Loading';
import WorkflowModal from './components/WorkflowModal';

//import { getInitialData } from './utils/api';
import { getCards, getCampaigns } from './utils/api';

class App extends Component {
	state = {
		loading: true,
		cards: [],
		campaigns: [],
		filter: '',
		modalCard: ''
	};
	componentDidMount() {
		this.getData();
	}

	async getData() {
		const [ campaigns, cards ] = await Promise.all([ getCampaigns(), getCards() ]);

		this.setState({ campaigns, cards, loading: false });
	}

	// This version of getData, uses hardcoded json instead of API call
	// async getData() {
	// 	// Making API call and setting state
	// 	const data = await getInitialData();
	// 	const { cards, campaigns } = data;
	// 	this.setState({ cards, campaigns, loading: false });
	// }

	getFilteredCards = () => {
		// Returns filtered cards
		const { filter } = this.state;
		if (!filter) return this.state.cards;
		return this.state.cards.filter((card) => card.campaignId === filter.id);
	};
	handleFilterChange = (newFilter = '') => {
		this.setState({ filter: newFilter });
	};

	setModalCard = (card) => {
		this.setState({ modalCard: card });
	};

	updateCards = () => {
		// this.setState({ cards: [] });
		getCards().then((list) => {
			const cards = list.sort((a, b) => a.cardTitle - b.cardTitle);
			this.setState({ cards });
		});
	};

	render() {
		const { campaigns, loading, filter, modalCard } = this.state;
		if (loading) return <Loading />;
		return (
			<div className="App">
				<Header campaigns={campaigns} onFilterChange={this.handleFilterChange} filter={filter} />
				<div className="container dashboard--container mb-5">
					<CardGrid cards={this.getFilteredCards()} setModal={this.setModalCard} />
				</div>
				{modalCard && <WorkflowModal card={this.state.modalCard} updateCards={this.updateCards} />}
			</div>
		);
	}
}

export default App;
