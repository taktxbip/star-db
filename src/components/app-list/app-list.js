import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./app-list.css";

export default class AppList extends Component {
  state = {
    itemList: null,
    loading: true,
    error: false
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onListLoaded = itemList => {
    this.setState({
      itemList,
      loading: false,
      error: false
    });
  };

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then(this.onListLoaded)
      .catch(this.onError);
  }

  renderItems(arr, current) {
    if (arr) {
      return arr.map(( item ) => {

				const { id } = item;
				const label = this.props.renderItem(item);
        const currentClass = current === id ? " active" : '';
        return (
          <li
            className={`list-group-item list-group-item-action${currentClass}`}
            key={id}
            onClick={() => this.props.onItemSelected(id)}
          >
            { label }
          </li>
        );
      });
    }
  }

  render() {
    const { itemList, loading, error } = this.state;
    const { currentItem } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const items = this.renderItems(itemList, currentItem);

    return (
      <div className="app-list list-group">
        {errorMessage}
        {spinner}
        {items}
      </div>
    );
  }
}
