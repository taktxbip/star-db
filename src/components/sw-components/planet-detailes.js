import React from "react";

import { withSwapiService } from '../hoc-helper';
import InfoItem, { Record } from "../info-item/info-item";


const PlanetDetailes = ( props ) => {
	return (
		<InfoItem { ...props } >
				<Record field="population" label="Population"></Record>
				<Record field="rotationPeriod" label="Rotation Period"></Record>
				<Record field="diameter" label="Diameter"></Record>
			</InfoItem>
	)
};


const mapMethodsToProps = ( swapiService ) => {
	return {
		getData: swapiService.getPlanet,
		getImageUrl: swapiService.getPlanetImage
	}
}


export default withSwapiService(mapMethodsToProps)(PlanetDetailes);
