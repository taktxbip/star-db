import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./info-person.css";

export default class InfoPerson extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  };

  updatePerson() {
		this.setState({
			loading: true
		});
    const { personId } = this.props;

    if (personId) {
      this.setState({ person: personId });
      this.swapiService
        .getPerson(personId)
        .then(person => {
          this.setState({
            person,
            loading: false
          });
        })
        .catch(this.onError);
    }
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    const { person, loading, error } = this.state;
    const { personId } = this.props;

    const hasData = !error && !loading;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = hasData ? (
      <InfoContent personData={person} newPersonId={personId} />
    ) : null;

    // console.log(person);

    if (!this.state.person) {
      return (
        <div className="random-planet jumbotron">
          <span>Select a person from a list</span>
        </div>
      );
    }

    return (
      <div className="random-planet jumbotron">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const InfoContent = ({ personData, newPersonId }) => {
  const { id, name, gender, birthYear, eyeColor } = personData;
  // const { id, name, gender, birthYear, eyeColor } = personData;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        alt={name}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
      <div className="random-planet-descr">
        <h3>{name}</h3>
        <ul className="list-group random-planet-table">
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Gender <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Birth Year <span>{birthYear}</span>
          </li>
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Eye Color<span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
