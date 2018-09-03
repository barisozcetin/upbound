import React from 'react';

const CardFooter = ({ card }) => {
	return (
		<div className="card-footer text-muted d-flex justify-content-between">
			<div>
				<span className="pr-1">
					<i className="fas fa-database" />
				</span>
				{card.listOfPlans[0].price.amount}
			</div>
			<div>
				<span className="pr-1">
					<i className="fas fa-user-friends" />
				</span>
				{card.subscribers}
			</div>
			<div>
				<span className="pr-1">
					<i className="fas fa-eye" />
				</span>
				{card.views}
			</div>
		</div>
	);
};

export default CardFooter;
