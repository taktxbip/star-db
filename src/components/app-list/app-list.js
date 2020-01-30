import React from "react";
import ErrorIndicator from "../error-indicator";
import "./app-list.css";

const AppList = ( props ) => {

		const { currentItem, data, error, onItemSelected } = props;

		// console.log('currentItem: ', currentItem);
		// console.log('props: ', props);

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

export default AppList;