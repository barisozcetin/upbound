import React, { Component } from 'react';
import FilterDropdown from './header/FilterDropdown';
import HeaderCalender from './header/HeaderCalender';

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
			<nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
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
							<FilterDropdown campaigns={campaigns} onFilterChange={this.props.onFilterChange} filter={filter} />
							<li className="nav-item ml-2">
								<button className="nav-link bg-transparent border-0">
									<i className="fas fa-list-ul" /> Pending
								</button>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item ml-2">
								<a className="nav-link" href="/">
									<span className="input-group-text bg-transparent border-0">
										<i className="fas fa-search" />
									</span>
								</a>
							</li>
							<HeaderCalender />
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
