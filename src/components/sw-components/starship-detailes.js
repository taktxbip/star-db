import React from "react";

import { withSwapiService } from '../hoc-helper';
import InfoItem, { Record } from "../info-item/info-item";


const StarshipDetailes = ( props ) => {
	return (
		<InfoItem { ...props } >
				<Record field="length" label="Length"></Record>
				<Record field="cost" label="Cost"></Record>
				<Record field="crew" label="Crew"></Record>
				<Record field="passengers" label="Passengers"></Record>
				<Record field="cargo" label="Cargo Capacity"></Record>
			</InfoItem>
	)
};


const mapMethodsToProps = ( swapiService ) => {
	return {
		getData: swapiService.getStarship,
		getImageUrl: swapiService.getStarshipImage
	}
}

export default withSwapiService(mapMethodsToProps)(StarshipDetailes);


