import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import AppList from "../app-list";
import InfoPerson from "../info-person";
import ErrorIndicator from "../error-indicator";
import Row from "../row";


export default class PagePeople extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    error: false
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  renderItem = () => {};

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
			<InfoPerson personId={selectedPerson} />
		)

    return (
			<Row leftElement = { itemList } rightElement= { infoPerson } />
    );
  }
}
