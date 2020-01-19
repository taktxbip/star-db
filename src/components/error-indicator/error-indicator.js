import React from 'react';
import './error-indicator.css';
import icon from './Icon_Death Star.png';

const ErrorIndicator = () => {
	return (
		<div className="error-indicator">
			<img className="error-indicator-image" src={ icon } alt="Death Star" />
			<span className="boom">BOOM!</span>
			<span>Something has gone terribly wrong</span>
			<span>(but we always send droids to fix it)</span>
		</div>
	);
};

export default ErrorIndicator;