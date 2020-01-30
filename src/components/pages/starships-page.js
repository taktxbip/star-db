import React, { Component } from 'react';
import {StarshipList, StarshipDetailes } from "../sw-components";
import Row from "../row";

export default class StarshipsPage extends Component {
	state = {
		currentItem: null
	}

	onItemSelected = (currentItem) => {
		this.setState({
			currentItem
		})
	}

	render() {
		const { currentItem } = this.state;

		return (
		<Row 
			leftElement={ <StarshipList onItemSelected={this.onItemSelected} /> } 
			rightElement={ <StarshipDetailes itemId={currentItem} /> } 
		/>
		)
	}
}