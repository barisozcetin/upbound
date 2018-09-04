import React from 'react';

import CardActions from './CardActions';
import CardFooter from './CardFooter';
import CardProgress from './CardProgress';

const CardItem = ({ card, setModal, updateCards }) => {
	return (
		<div className="col-lg-3 col-md-4 col-xs-12 mt-5">
			<div className="card" style={{ width: '100%' }}>
				<img className="card-img-top" src={card.primaryMediaUrl} alt={card.cardTitle} />
				<div className="card-img-overlay card--overlay"> </div>
				<div className="card-body">
					<p className="card-text">{card.cardDescription.substring(0, 100)}</p>
					<CardProgress currentWorkflow={card.currentWorkflow} price={card.listOfPlans[0].price.amount} />
				</div>

				<CardFooter card={card} />
				<CardActions card={card} setModal={setModal} />
			</div>
		</div>
	);
};

export default CardItem;
