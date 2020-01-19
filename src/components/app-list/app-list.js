import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./app-list.css";

export default class AppList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
    error: false
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onListLoaded = peopleList => {
    this.setState({
      peopleList,
      loading: false,
      error: false
    });
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(this.onListLoaded)
      .catch(this.onError);
  }

  renderItems(arr, current) {
    if (arr) {
      return arr.map(({ id, name }) => {
				const currentClass = current === id ? ' active' : null;
        return (
          <li
            className={`list-group-item list-group-item-action${currentClass}`}
						key={id}
						onClick = { () => this.props.onItemSelected(id) }
          >
            {name}
          </li>
        );
      });
    }
  }

  render() {
		const { peopleList, loading, error } = this.state;
		const { currentItem } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
		const items = this.renderItems(peopleList, currentItem);

    return (
      <div className="app-list list-group">
        {errorMessage}
        {spinner}
        {items}
      </div>
    );
  }
}
