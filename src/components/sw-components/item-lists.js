import React from 'react';
import { withData } from "../hoc-helper";
import AppList from "../app-list";
import { withSwapiService } from '../hoc-helper';



const withChildFunction = (Wrapped, fn) => {
	return (props) => {
		return (
			<Wrapped { ...props } >
				{ fn }
			</Wrapped>
		)
	}
}
const renderName = ( { name, gender, birthYear } ) => <React.Fragment>{ name }<span>({gender}, {birthYear })</span></React.Fragment>;
const renderModel = ( { name, cost, length } ) => <React.Fragment>{ name }<span>(${cost}, { length }m)</span></React.Fragment>;
const renderPlanet = ( { name, population, diameter } ) => <React.Fragment>{ name }<span>({population} people, { diameter }d)</span></React.Fragment>;

const mapPersonMethodsToProps = ( swapiService ) => {
	return {
		getData: swapiService.getAllPeople
	}
}

const mapStarshipMethodsToProps = ( swapiService ) => {
	return {
		getData: swapiService.getAllStarships
	}
}

const mapPlanetMethodsToProps = ( swapiService ) => {
	return {
		getData: swapiService.getAllPlanets
	}
}

const PersonList = withSwapiService(withData(withChildFunction(AppList, renderName)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(AppList, renderPlanet)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(AppList, renderModel)), mapStarshipMethodsToProps);

export {
	PersonList,
	StarshipList,
	PlanetList
};