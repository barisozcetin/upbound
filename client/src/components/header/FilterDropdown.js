import React from 'react';

const FilterDropdown = ({ onFilterChange, campaigns, filter }) => {
	return (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				id="navbarDropdown"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
				href="/"
			>
				{filter.campaignName || 'All Campaigns'}
			</a>
			<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				<button
					className={`dropdown-item ${filter === '' ? 'active' : ''}`}
					onClick={() => onFilterChange()}
					// href="/"
				>
					All Campaigns
				</button>
				<div className="dropdown-divider" />
				{campaigns &&
					campaigns.map((campaign) => (
						<button
							className={`dropdown-item ${filter.id === campaign.id ? 'active' : ''}`}
							key={campaign.id}
							onClick={() => {
								onFilterChange(campaign);
							}}
							// href="/"
						>
							{campaign.campaignName}
						</button>
					))}
			</div>
		</li>
	);
};

export default FilterDropdown;
