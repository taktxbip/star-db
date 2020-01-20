import React from 'react';
import './row.css'

const Row = ( { leftElement, rightElement } ) => {
	return (
		<div className="row">
		<div className="col-lg-6">
			{ leftElement }
		</div>
		<div className="col-lg-6">
			{ rightElement }
		</div>
	</div>
	);
}

export default Row;