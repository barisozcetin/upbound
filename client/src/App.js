import React, { Component } from 'react';

import Header from './components/Header';
import CardGrid from './components/card/CardGrid';
import Loading from './components/icons/Loading';

import { getInitialData } from './utils/api';

class App extends Component {
	state = {
		loading: true,
		cards: [],
		campaigns: [],
		filter: ''
	};
	componentDidMount() {
		this.getData();
	}
	async getData() {
		// Making API call and setting state
		const data = await getInitialData();
		const { cards, campaigns } = data;
		this.setState({ cards, campaigns, loading: false });
	}
	getFilteredCards = () => {
		// Returns filtered cards
		const { filter } = this.state;
		if (!filter) return this.state.cards;
		return this.state.cards.filter((card) => card.campaignId === filter.id);
	};
	handleFilterChange = (newFilter = '') => {
		this.setState({ filter: newFilter });
	};
	render() {
		const { campaigns, loading, filter } = this.state;
		if (loading) return <Loading />;
		return (
			<div className="App">
				<Header campaigns={campaigns} onFilterChange={this.handleFilterChange} filter={filter} />
				<div className="container dashboard--container mb-5">
					<CardGrid cards={this.getFilteredCards()} />
				</div>
			</div>
		);
	}
}

export default App;
