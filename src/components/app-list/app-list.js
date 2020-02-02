import React from "react";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types';
import "./app-list.css";


const AppList = ( props ) => {

		const { currentItem, data, error, onItemSelected } = props;

		const items = data.map(( item ) => {

			const { id } = item;
			const label = props.children(item);
			const currentClass = currentItem === id ? " active" : '';
			return (
				<li
					className={`list-group-item list-group-item-action${currentClass}`}
					key={id}
					onClick={() => onItemSelected(id)}
				>
					{ label }
				</li>
			);
		});
		
		const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className="app-list list-group">
        {errorMessage}
        {items}
      </div>
    );
  
};

AppList.defaultProps = {
	onItemSelected: () => {}
}
AppList.propTypes = {
	onItemSelected: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	children: PropTypes.func.isRequired
}

export default AppList;