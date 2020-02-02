import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="app">
              <div className="container">
                <Header onServiceChange={this.onServiceChange} />
                <RandomPlanet />
                <Route path="/" render={ () => <h2>Welcome to StarDB</h2> } exact />
                <Route path="/people" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} />
              </div>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
