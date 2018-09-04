import React, { Component } from 'react';

class CardChangeState extends Component {
	moveWorkflow = (option) => {
		const id = this.props.cardTitle;
		const options = {};
		if (option === 'negative') options.negative = true;
		if (option === 'pause') options.pause = true;

		fetch('/api/cards/' + id, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(options),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => console.log('Success:', JSON.stringify(response)))
			.catch((error) => console.error('Error:', error));
	};
	render() {
		const currentStatus = this.props.currentStatus;
		const canUseNext = [ 'saved', 'pending', 'active' ];
		const canUseNegative = [ 'pending', 'active' ];
		const canUsePause = [ 'active', 'paused' ];
		return (
			// <div className="container">
			// 	<div className="row">
			// 		{canUseNext.includes(currentStatus) && (
			// 			<button onClick={() => this.moveWorkflow()} className="btn btn-primary">
			// 				Next
			// 			</button>
			// 		)}
			// 		{canUseNegative.includes(currentStatus) && (
			// 			<button onClick={() => this.moveWorkflow('negative')} className="btn btn-danger">
			// 				Negative
			// 			</button>
			// 		)}
			// 		{canUsePause.includes(currentStatus) && (
			// 			<button onClick={() => this.moveWorkflow('pause')} className="btn btn-danger">
			// 				Pause/Activate
			// 			</button>
			// 		)}
			// 	</div>
			// </div>
			<div className="modal" tabindex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Move workflow</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>{this.props.cardTitle}</p>
						</div>
						<div className="modal-footer">
							{canUseNext.includes(currentStatus) && (
								<button onClick={() => this.moveWorkflow()} className="btn btn-primary">
									Next
								</button>
							)}
							{canUseNegative.includes(currentStatus) && (
								<button onClick={() => this.moveWorkflow('negative')} className="btn btn-danger">
									Negative
								</button>
							)}
							{canUsePause.includes(currentStatus) && (
								<button onClick={() => this.moveWorkflow('pause')} className="btn btn-danger">
									Pause/Activate
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardChangeState;

<div className="modal" tabindex="-1" role="dialog">
	<div className="modal-dialog" role="document">
		<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title">Move workflow</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
				<p>{this.props.cardTitle}</p>
			</div>
			<div className="modal-footer">
				{canUseNext.includes(currentStatus) && (
					<button onClick={() => this.moveWorkflow()} className="btn btn-primary">
						Next
					</button>
				)}
				{canUseNegative.includes(currentStatus) && (
					<button onClick={() => this.moveWorkflow('negative')} className="btn btn-danger">
						Negative
					</button>
				)}
				{canUsePause.includes(currentStatus) && (
					<button onClick={() => this.moveWorkflow('pause')} className="btn btn-danger">
						Pause/Activate
					</button>
				)}
			</div>
		</div>
	</div>
</div>;
