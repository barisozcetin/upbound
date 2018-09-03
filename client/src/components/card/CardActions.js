import React, { Component } from 'react';
import CardUpdate from './../icons/CardUpdate';

class CardActions extends Component {
	state = {
		actions: [
			{
				text: 'Edit',
				icon: 'far fa-edit'
			},
			{
				text: 'Publish',
				icon: 'far fa-check-circle'
			},
			{
				text: 'Share',
				icon: 'fas fa-share-alt'
			},
			{
				text: 'Delete',
				icon: 'far fa-trash-alt'
			}
		]
	};
	render() {
		const { actions } = this.state;
		return (
			<div className="card--actions">
				<div className="actions--icon p-1">
					<CardUpdate />
				</div>
				<ul className="list-group actions--list">
					{actions &&
						actions.map((action) => (
							<button
								key={action.text}
								className="list-group-item list-group-item-action flex-column align-items-start py-1 px-3"
							>
								<i className={action.icon} /> {action.text}
							</button>
						))}
				</ul>
			</div>
		);
	}
}

export default CardActions;
