import React, { Component } from "react";
// import SwapiService from '../../services/swapi-service';
import AppList from "../app-list";
import Header from "../header";
import RandomPlanet from "../random-planet";
import InfoPerson from "../info-person";
// import InfoPlanet from "../info-planet";
// import InfoStarship from "../info-starship";
import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { selectedPerson } = this.state;
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RandomPlanet />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <AppList
                currentItem={selectedPerson}
                onItemSelected={this.onPersonSelected}
              />
            </div>
            <div className="col-lg-6">
              <InfoPerson personId={selectedPerson} />
              {/* <InfoStarship /> */}
              {/* <InfoPlanet /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
