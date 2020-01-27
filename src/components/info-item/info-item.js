import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./info-item.css";


const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item d-flex justify-content-start align-items-center">
		{ label } <strong>{ item[field] }</strong>
	</li>
	);
};

export { Record };


export default class infoItem extends Component {

  swapiService = new SwapiService();

  state = {
		item: null,
		imageUrl: null,
    loading: true,
    error: false
  };

  updateItem() {
		this.setState({
			loading: true
		});

    const { itemId, getData, getImageUrl } = this.props;

    if (itemId) {
      this.setState({ item: itemId });
      getData( itemId ).then(item => {
          this.setState({
						item,
						imageUrl: getImageUrl( item ),
            loading: false
          });
        })
        .catch( this.onError );
    }
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  componentDidMount() {
		this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
		}
		
  }

  render() {
		const { item, imageUrl, loading, error } = this.state;
	
    const { itemId } = this.props;

    const hasData = !error && !loading;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = hasData ? (
      <InfoContent list = { 
				React.Children.map(this.props.children, (child) => {
					return React.cloneElement( child, { item } );
				})
			} imageUrlData = { imageUrl } personData={item} newitemID={itemId} />
    ) : null;


    if (!this.state.item) {
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

const InfoContent = ({ personData, imageUrlData, list }) => {
	const { name } = personData;


  return (
    <React.Fragment>
      <img
        className="planet-image"
        alt={name}
        src={ imageUrlData }
      />
      <div className="random-planet-descr">
        <h3>{name}</h3>
        <ul className="list-group random-planet-table">
					{ list }
        </ul>
      </div>
    </React.Fragment>
  );
};
