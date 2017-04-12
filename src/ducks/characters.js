const SET_CHARACTERS = "SET_CHARACTERS";
const SET_VEHICLES = "SET_VEHICLES";

const initialState = {
	  characters: []
	, errorFetchingCharacters: false
	, loadingCharacters: false
	, loadingVehicles: false
	, vehicles: []
};

export default function characters( state = initialState, action ) {
	// console.log( action );
	switch ( action.type ) {
		case SET_CHARACTERS + "_FULFILLED":
			return {
				  characters: action.payload
				, loadingCharacters: false
			};
		case SET_CHARACTERS + "_PENDING":
			return {
				  characters: state.characters
				, loadingCharacters: true
			};
		case SET_CHARACTERS + "_REJECTED":
			return Object.assign( {}, state, {
				errorFetchingCharacters: true
			} );
		case SET_VEHICLES + "_FULFILLED":
			return Object.assign( {}, state, {
				  vehicles: action.payload
				, loadingVehicles: false
			} );
		case SET_VEHICLES + "_PENDING":
			return Object.assign( {}, state, {
				  vehicles: []
				, loadingVehicles: true
			} );
		default: return state;
	}
}

export function setCharacters( charactersPromise ) {
	return { payload: charactersPromise, type: SET_CHARACTERS }
}

export function setVehicles( vehiclesPromise ) {
	return { payload: vehiclesPromise, type: SET_VEHICLES };
}
