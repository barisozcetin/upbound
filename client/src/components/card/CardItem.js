import React from 'react';
import Edit from './../icons/Edit';
import Delete from './../icons/Delete';
import Publish from './../icons/Publish';
import CardUpdate from './../icons/CardUpdate';

const CardItem = ({ card }) => {
	return (
		<div className="col-lg-3 col-md-4 col-xs-12 mt-5">
			<div className="card" style={{ width: '100%' }}>
				<img className="card-img-top" src={card.primaryMediaUrl} alt={card.cardTitle} />
				<div className="card-img-overlay card--overlay"> </div>
				<div className="card-body">
					<h5 className="card-title">{card.cardTitle}</h5>
					<p className="card-text">{card.cardDescription}</p>
				</div>
				<div className="card-footer text-muted">2 days ago</div>
				<div className="card--actions">
					<div className="actions--icon p-1">
						<CardUpdate />
					</div>
					<ul className="list-group actions--list">
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<Edit /> Edit
						</a>
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<Publish /> Publish
						</a>
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<Publish /> Share
						</a>
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<Delete /> Delete
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
