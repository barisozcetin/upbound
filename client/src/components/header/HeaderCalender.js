import React from 'react';

const HeaderCalender = () => {
	return (
		<li className="nav-item ml-2">
			<div className="nav-link text-danger">
				<span className="mr-3"> &lt; </span>
				<span>
					<i className="far fa-calendar" />
				</span>
				<span> Today, Jan 10th</span>
				<span className="mx-3"> &gt; </span>
				<span className="ml-2 px-3  bg-danger calender--circle text-white">1d</span>
			</div>
		</li>
	);
};

export default HeaderCalender;
