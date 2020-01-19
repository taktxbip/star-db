import React from 'react';
import './app-list.css';

const AppList = () => {

	return (
		<div className="app-list list-group">
			  <a href="http://google.com/" className="list-group-item list-group-item-action active">List Item</a>
			  <a href="http://google.com/" className="list-group-item list-group-item-action">List Item</a>
			  <a href="http://google.com/" className="list-group-item list-group-item-action">List Item</a>
			  <a href="http://google.com/" className="list-group-item list-group-item-action">List Item</a>
			  <a href="http://google.com/" className="list-group-item list-group-item-action">List Item</a>
			  <a href="http://google.com/" className="list-group-item list-group-item-action disabled">List Item</a>
		</div>
	);

}

export default AppList;