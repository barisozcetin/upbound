import React, { Component } from 'react';
import CardItem from './CardItem';
import CreateCard from './CreateCard';

class CardGrid extends Component {
	state = {};
	render() {
		const { cards, setModal, updateCards } = this.props;
		return (
			<div className="row mt-1">
				{cards && cards.map((card) => <CardItem key={card.cardTitle} card={card} setModal={setModal} />)} <CreateCard />
			</div>
		);
	}
}

export default CardGrid;
