import React from "react";

import { withSwapiService } from '../hoc-helper';
import InfoItem, { Record } from "../info-item/info-item";


const PersonDetailes = ( props ) => {

	return (
		<InfoItem { ...props } >
				<Record field="gender" label="Gender"></Record>
				<Record field="eyeColor" label="Eye Color"></Record>
		</InfoItem>
	)

};

const mapMethodsToProps = ( swapiService ) => {
	return {
		getData: swapiService.getPerson,
		getImageUrl: swapiService.getPersonImage
	}
}

export default withSwapiService(PersonDetailes, mapMethodsToProps);