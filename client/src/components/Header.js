import React, { Component } from 'react';

export class Header extends Component {
	state = {
		inputHidden: true,
		campaignFilter: ''
	};
	toggleInput = (e) => {
		e.preventDefault();
		this.inputElement.focus();
		this.setState((prevState) => ({ inputHidden: !prevState.inputHidden }));
	};
	render() {
		const { inputHidden } = this.state;
		const { campaigns, filter } = this.props;
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
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
									<a
										className={`dropdown-item ${filter === '' ? 'active' : ''}`}
										onClick={() => this.props.onFilterChange()}
										href="/"
									>
										All Campaigns
									</a>
									<div className="dropdown-divider" />
									{campaigns &&
										campaigns.map((campaign) => (
											<a
												className={`dropdown-item ${filter.id === campaign.id ? 'active' : ''}`}
												key={campaign.id}
												onClick={() => {
													this.props.onFilterChange(campaign);
												}}
												href="/"
											>
												{campaign.campaignName}
											</a>
										))}
								</div>
							</li>
						</ul>

						<form className="form-inline my-2 my-lg-0 search--form">
							<div className="input-group">
								<input
									// className="form-control header--input hidden py-2  border bg-transparent"
									className={`py-2  border bg-transparent header--input  ${inputHidden ? 'hidden' : ''}`}
									type="search"
									defaultValue="search"
									id="example-search-input"
									ref={(el) => (this.inputElement = el)}
								/>
							</div>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
