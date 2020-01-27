import React from 'react';
import './header.css';

const Header = ({ onServiceChange }) => {

	return (
		<div className="header">
			<span className="header-logo">Star DB</span>
			<nav className="star-nav">
			<ul>
				<li><span>People</span></li>
				<li><span>Planets</span></li>
				<li><span>Starships</span></li>
			</ul>
			<button 
			onClick = { onServiceChange }
			className="btn btn-primary btn-sm">Change Service</button>
			</nav>
		</div>
	);

}

export default Header;