import axios from "axios";

import store from "./store";
import { setCharacters, setVehicles } from "./ducks/characters";

const BASE_URL = "http://swapi.co/api/";

export function getCharacters() {
	const charactersPromise = axios.get( BASE_URL + "people" )
		.then( people => people.data.results );

	store.dispatch( setCharacters( charactersPromise ) );
}

export function getVehicles( urlArray ) {
	const vehiclesPromises = urlArray.map( url => axios.get( url ) );
	store.dispatch( setVehicles( Promise.all( vehiclesPromises )
		.then( data => data.map( vehicle => vehicle.data ) )
	) );
}
