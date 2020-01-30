import React, { Component } from 'react';
import Row from "../row";
import { PersonList, PersonDetailes } from "../sw-components";


export default class PeoplePage extends Component {
	
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
			leftElement={ <PersonList onItemSelected={this.onItemSelected} /> } 
			rightElement={ <PersonDetailes itemId={currentItem} /> } 
		/>
		)
	}

}