import React from 'react';

const CreateCard = () => {
	return (
		<div className="col-lg-3 col-md-4 col-xs-12 mt-5">
			<div className="card" style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
				<div className="card--center">
					<div className="plus--circle">
						<i class="fas fa-plus" />
					</div>
					<p>Create a Service Card</p>
				</div>
			</div>
		</div>
	);
};

export default CreateCard;
