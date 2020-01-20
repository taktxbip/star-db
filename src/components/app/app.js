import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PagePeople from "../page-people";
// import InfoPlanet from "../info-planet";
// import InfoStarship from "../info-starship";
import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true
  };


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

          <PagePeople />


					

        </div>
      </div>
    );
  }
}
