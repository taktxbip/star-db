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
  render() {
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
            <AppList />
          </div>
          <div className="col-lg-6">
            <InfoPerson />
            {/* <InfoStarship /> */}
            {/* <InfoPlanet /> */}
          </div>
        </div>

				</div>
      </div>
    );
  }
}
