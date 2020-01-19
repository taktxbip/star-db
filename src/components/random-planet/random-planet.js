import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./random-planet.css";


export default class RandomPlanet extends Component {

  swapiService = new SwapiService();


	componentDidMount() {
		console.log('componentDidMount()');
		this.updatePlanet();
		setInterval(this.updatePlanet, 10000);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount()');
	}

  state = {
    planet: {},
    loading: true
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = err => {
    this.setState({ 
			error: true,
			loading: false
		});
  };

  updatePlanet = () => {
		console.log('update');
    const id = Math.floor(Math.random() * 24) + 2;
    // const id = 12344;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
		console.log('render()');
    const { planet, loading, error } = this.state;

		const hasData = ( !error && !loading );

    const spinner = loading ? <Spinner /> : null;
    const planetView = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className="random-planet jumbotron">
        {errorMessage}
        {spinner}
        {planetView}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, id, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
				className="planet-image"
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
