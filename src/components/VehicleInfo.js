import React, { PropTypes } from "react";

export default function VehicleInfo() {
	return (
		<div className="vehicle-info">
			<h5>Snowspeeder</h5>
			<p>Model: t-f7 airspeeder</p>
			<p>Cost: unknown credits</p>
			<p>Manufacturer: Incom corporation</p>
		</div>
	);
}

VehicleInfo.propTypes = {
	  name: PropTypes.string.isRequired
	, model: PropTypes.string.isRequired
	, cost: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired
	, manufacturer: PropTypes.string
};
