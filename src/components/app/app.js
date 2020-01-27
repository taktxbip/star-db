import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
// import PagePeople from "../page-people";
import { PersonList, PlanetList, StarshipList, PersonDetailes, StarshipDetailes, PlanetDetailes } from "../sw-components";
import Row from "../row";
import "./app.css";

export default class App extends Component {


  state = {
		showRandomPlanet: true,
		swapiService: new SwapiService()
  };

	onServiceChangeF = () => {
		this.setState( (swapiService) => {
			const service = swapiService instanceof SwapiService ? '' : swapiService;
			console.log('switched to: ', service.name);
			
		});
	}

  render() {


    return (
			<SwapiServiceProvider value = { this.state.swapiService } >
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header onServiceChange = { this.onServiceChangeF }/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RandomPlanet />
            </div>
          </div>
					{/* <PagePeople /> */}
					<PersonList />
					<StarshipList />
					<PlanetList />
					<Row leftElement = { 	<PersonDetailes itemId = {5} /> } rightElement= { <PlanetDetailes itemId = {5} /> } />
					<StarshipDetailes itemId = {5} />
        </div>
      </div>
			</SwapiServiceProvider>
    );
  }
}
