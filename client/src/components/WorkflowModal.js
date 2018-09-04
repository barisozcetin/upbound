import React, { Component } from 'react';

class WorkflowModal extends Component {
	moveWorkflow = (option) => {
		const id = this.props.card.cardTitle;
		const options = {};
		if (option === 'negative') options.negative = true;
		if (option === 'pause') options.pause = true;

		fetch('/api/cards/' + id, {
			method: 'POST',
			body: JSON.stringify(options),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => {
				this.props.updateCards();
			})
			.catch((error) => console.error('Error:', error));
	};
	render() {
		const currentStatus = this.props.card.currentWorkflow;
		const canUseNext = [ 'saved', 'pending', 'active' ];
		const canUseNegative = [ 'pending', 'active' ];
		const canUsePause = [ 'active', 'paused' ];
		return (
			<div className="modal show" id="workflowModal" tabIndex="-1" role="dialog" aria-hidden="false">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Move workflow</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>{this.props.card.cardTitle}</p>
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
								<button onClick={() => this.moveWorkflow('pause')} className="btn btn-secondary">
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

export default WorkflowModal;
