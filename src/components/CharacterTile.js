import React, { PropTypes } from "react";

import "./CharacterTile.css";

export default function CharacterTile() {
	return (
		<div className="character-tile">
			<h3 className="character-tile__name">
				Luke Skywalker
			</h3>
			<p className="character-tile__info">Born 19BBY</p>
		</div>
	);
}

CharacterTile.propTypes = {
	  name: PropTypes.string.isRequired
	, birthYear: PropTypes.string.isRequired
};
