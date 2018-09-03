import React, { Component } from 'react';
import CardItem from './CardItem';
import CreateCard from './CreateCard';

class CardGrid extends Component {
	state = {};
	render() {
		const { cards } = this.props;
		return (
			<div className="row mt-1">
				{cards && cards.map((card, index) => <CardItem key={index} card={card} />)} <CreateCard />
			</div>
		);
	}
}

export default CardGrid;
