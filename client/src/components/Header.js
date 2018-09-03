import React, { Component } from 'react';
import FilterDropdown from './header/FilterDropdown';

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
								<a className="nav-link" href="/">
									<i className="fas fa-list-ul" /> Pending
								</a>
							</li>
						</ul>

						<form className="form-inline my-2 my-lg-0 search--form">
							<div className="input-group">
								<input
									className={`py-2  border bg-transparent header--input  ${inputHidden ? 'hidden' : ''}`}
									style={{ width: '250px' }}
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
