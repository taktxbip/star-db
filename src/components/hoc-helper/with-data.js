import React, { Component } from 'react';
import Spinner from "../spinner";
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
	return class extends Component {

		state = {
			data: null,
			loading: true,
			error: false
		};
	
		componentDidMount() {
			this.update();
		}


		update = () => {
			this.props.getData()
				.then(this.onListLoaded)
				.catch(this.onError);
		}

		componentDidUpdate = (prevProps) => {
			if ( this.props.getData !== prevProps.getData ) {
				this.update();
			}
		}

		onError = () => {
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

			if (error)
				return <ErrorIndicator />

			return <View { ...this.props} currentItem={ currentItem } data={ data } error = { error } />
		}
	}
};

export default withData;