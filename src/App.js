import React, { Component } from 'react';
import { connect } from "react-redux";

import './App.css';

import CharacterTile from "./components/CharacterTile";
import CharacterDetails from "./components/CharacterDetails";

import { getCharacters, getVehicles } from "./characterService";

class App extends Component {
	constructor() {
		super();

		this.state = {
			activeCharacterIndex: null
		};

		this.selectActiveCharacter = this.selectActiveCharacter.bind( this );
	}
	componentDidMount() {
		getCharacters();
	}

	selectActiveCharacter( index ) {
		getVehicles( this.props.characters[ index ].vehicles );
		this.setState( { activeCharacterIndex: index } );
	}

	renderCharacterTiles( error, loading, characters ) {
		if ( error ) {
			return <h1>There was an error, try again.</h1>;
		}

		if ( loading ) {
			return <span>Loading, please wait</span>;
		}

		return characters.map( ( c, index ) => (
			<CharacterTile
				key={ c.url }
				name={ c.name }
				birthYear={ c.birth_year }
				selectCharacter={ this.selectActiveCharacter }
				index={ index }
			/>
		) );
	}

	render() {
		const { characters, vehicles, errorFetchingCharacters, loadingCharacters } = this.props;
		const { activeCharacterIndex } = this.state;

		return (
			<div className="app">
				<aside className="app__character-tiles">
					{ this.renderCharacterTiles( errorFetchingCharacters, loadingCharacters, characters ) }
				</aside>
				{ this.state.activeCharacterIndex === null
					? null
					: <CharacterDetails
						name={ characters[ activeCharacterIndex ].name }
						born={ characters[ activeCharacterIndex ].birth_year }
						gender={ characters[ activeCharacterIndex ].gender }
						hairColor={ characters[ activeCharacterIndex ].hair_color }
						eyeColor={ characters[activeCharacterIndex ].eye_color }
						filmCount={ characters[ activeCharacterIndex ].films.length }
						vehicles={ vehicles }
					  />
				}

				{/*name: PropTypes.string.isRequired*/}
				{/*, born: PropTypes.string.isRequired*/}
				{/*, gender: PropTypes.oneOf( [ "male", "female", "n/a" ] ).isRequired*/}
				{/*, hairColor: PropTypes.string.isRequired*/}
				{/*, eyeColor: PropTypes.string.isRequired*/}
				{/*, filmCount: PropTypes.number.isRequired*/}
				{/*, vehicles: PropTypes.array.isRequired*/}
			</div>
		);
	}
}

export default connect( state => state )( App );
