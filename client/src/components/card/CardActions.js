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
							<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
								<i class={action.icon} /> {action.text}
							</a>
						))}
					{/* <a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<i class="far fa-edit" /> Edit
						</a>
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<i class="far fa-check-circle" /> Publish
						</a>
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<i class="fas fa-share-alt" /> Share
						</a>
						<a href="" className="list-group-item list-group-item-action flex-column align-items-start p-1 pr-3">
							<i class="far fa-trash-alt" /> Delete
						</a> */}
				</ul>
			</div>
		);
	}
}

export default CardActions;
