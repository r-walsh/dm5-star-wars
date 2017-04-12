import React, { PropTypes } from "react";

export default function VehicleInfo( { name, model, cost, manufacturer } ) {
	return (
		<div className="vehicle-info">
			<h5>{ name }</h5>
			<p>Model: { model }</p>
			<p>Cost: { cost } credits</p>
			<p>Manufacturer: { manufacturer }</p>
		</div>
	);
}

VehicleInfo.propTypes = {
	  name: PropTypes.string.isRequired
	, model: PropTypes.string.isRequired
	, cost: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired
	, manufacturer: PropTypes.string
};
