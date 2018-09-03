import React from 'react';
import Plus from './../icons/Plus';

const CreateCard = () => {
	return (
		<div className="col-lg-3 col-md-4 col-xs-12 mt-5">
			<div className="card" style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
				<div className="card--center">
					<div className="plus--circle">
						<Plus />
					</div>
					<p>Create a Service Card</p>
				</div>
			</div>
		</div>
	);
};

export default CreateCard;
