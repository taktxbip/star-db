import React, { Component } from 'react';
import Spinner from "../spinner";

const withData = (View) => {
	return class extends Component {

		state = {
			data: null,
			loading: true,
			error: false
		};
	
		componentDidMount() {
	
			this.props.getData()
				.then(this.onListLoaded)
				.catch(this.onError);
		}

		onError = err => {
			this.setState({
				error: true,
				loading: false
			});
		};
	
		onListLoaded = data => {
			this.setState({
				data,
				loading: false,
				error: false
			});
		};
		

		render() {

			const { currentItem } = this.props;
			const { data, error } = this.state;


			if (!data)
				return <Spinner />

			return <View { ...this.props} currentItem={ currentItem } data={ data } error = { error } />
		}
	}
};

export default withData;