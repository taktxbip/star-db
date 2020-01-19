import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet: {},
    loading: true
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 24) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;

		const spinner = loading ? <Spinner /> : null;
		const planetView = loading ? null : <PlanetView planet = { planet } />;

    return (
      <div className="random-planet jumbotron">
				{ spinner }
				{ planetView }
      </div>
    );
  }
}

const PlanetView = ( { planet } ) => {

	const { name, id, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        alt={name}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div className="random-planet-descr">
        <h3>{name}</h3>
        <ul className="list-group random-planet-table">
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Population <span>{population}</span>
          </li>
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Rotation Period <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Diameter <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
