import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./app-list.css";

export default class AppList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
		this.swapiService.getAllPeople()
		.then( (peopleList) => {
      this.setState({ peopleList });
      // console.log(this.state.peopleList);
    });
  }

  renderItems(arr) {
    arr.map(({ id, name }) => {
      return (
        <li className="list-group-item list-group-item-action active" key={id}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

		if ( !peopleList ) 
			return <Spinner />
    // const items = this.renderItems(peopleList);

    return <div className="app-list list-group">{/* { items } */}</div>;
  }
}
