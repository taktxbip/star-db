import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import "./app.css";

export default class App extends Component {


  state = {
		showRandomPlanet: true,
		swapiService: new SwapiService()
  };

	onServiceChange = () => {
		this.setState( ({ swapiService }) => {
			const service = ( swapiService instanceof SwapiService ) ? 
			DummySwapiService : SwapiService;
			return {
				swapiService: new service()
			}
		});
	}

  render() {

    return (
			<SwapiServiceProvider value = { this.state.swapiService } >
				<div className="app">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Header onServiceChange = { this.onServiceChange }/>
							</div>
						</div>
						<RandomPlanet />
						<PeoplePage />
						<PlanetsPage />
						<StarshipsPage />
					</div>
				</div>
			</SwapiServiceProvider>
    );
  }
}
