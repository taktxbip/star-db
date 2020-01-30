import React, { Component } from 'react';
import { PlanetList, PlanetDetailes } from "../sw-components";
import Row from "../row";

export default class PlanetsPage extends Component {
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
			leftElement={ <PlanetList onItemSelected={this.onItemSelected} /> } 
			rightElement={ <PlanetDetailes itemId={currentItem} /> } 
		/>
		)
	}
}