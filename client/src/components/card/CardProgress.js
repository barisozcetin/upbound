import React from 'react';

const CardProgress = ({ currentWorkflow, price }) => {
	let dotColor = '';
	switch (currentWorkflow) {
		case 'saved':
			dotColor = 'bg-warning';
			break;
		case 'active':
			dotColor = 'bg-success';
			break;
		case 'paused':
			dotColor = 'bg-primary';
			break;
		case 'pending':
			dotColor = 'bg-info';
			break;
		case 'declined':
		case 'expired':
		case 'terminated':
			dotColor = 'bg-danger';
			break;
		default:
			dotColor = 'bg-warning';
	}
	return (
		<div className="container">
			<div className="row justify-content-between">
				<span>${price}/month</span>
				<div className="d-flex align-items-center">
					{currentWorkflow}{' '}
					<div className={`rounded-circle ml-1 ${dotColor}`} style={{ width: '8px', height: '8px' }} />
				</div>
			</div>
			<div className="row">
				<div className="progress rounded-0" style={{ width: '100%', height: '8px' }}>
					<div
						className="progress-bar w-100 bg-warning"
						role="progressbar"
						aria-valuenow="100"
						aria-valuemin="0"
						aria-valuemax="100"
					/>
				</div>
			</div>
			{/* <div class="progress">
				<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
			</div> */}
		</div>
	);
};

export default CardProgress;
