import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import AppList from "../app-list";
import InfoItem, { Record } from "../info-item/info-item";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import Row from "../row";


export default class PagePeople extends Component {
	
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };



  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
		});
	
  };



  render() {
    const { selectedPerson, error } = this.state;
		
    if (error) {
      return <ErrorIndicator />;
    }


		const itemList = (
			<AppList
			getData={this.swapiService.getAllPeople}
			currentItem={selectedPerson}
			onItemSelected={this.onPersonSelected}
			renderItem={({ name, gender, birthYear }) => (

				<React.Fragment>
				{ name }
				<span>({gender}, {birthYear })</span>
				</React.Fragment>

			)}
		/>
		)

		const infoPerson = (
			<ErrorBoundry>
				<InfoItem 
				getImageUrl = { this.swapiService.getPersonImage } 
				itemID={selectedPerson} 
				getData = { this.swapiService.getPerson } >
						<Record field="gender" label="Gender"></Record>
						<Record field="eyeColor" label="Eye Color"></Record>
				</InfoItem>
			</ErrorBoundry>
		)

    return (
				<Row leftElement = { itemList } rightElement= { infoPerson } />
    );
  }
}
