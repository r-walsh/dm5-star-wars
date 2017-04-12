import React, { PropTypes } from "react";

import "./CharacterDetails.css";

import VehicleInfo from "./VehicleInfo";

export default function CharacterDetails() {
	return (
		<div className="character-details">
			<h1>Luke Skywalker</h1>
			<h3>Stats</h3>
			<ul className="character-details__stats-list">
				<li>Born 19BBY</li>
				<li>Gender: male</li>
				<li>Hair Color: blond</li>
				<li>Eye Color: blue</li>
				<li>Active in 5 films</li>
			</ul>

			<h3>Vehicles</h3>
			<VehicleInfo />
			<VehicleInfo />
		</div>
	);
}

CharacterDetails.propTypes = {
	  name: PropTypes.string.isRequired
	, born: PropTypes.string.isRequired
	, gender: PropTypes.oneOf( [ "male", "female", "n/a" ] ).isRequired
	, hairColor: PropTypes.string.isRequired
	, eyeColor: PropTypes.string.isRequired
	, filmCount: PropTypes.number.isRequired
	, vehicles: PropTypes.array.isRequired
};
