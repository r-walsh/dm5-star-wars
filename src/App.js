import React, { Component } from 'react';

import './App.css';

import CharacterTile from "./components/CharacterTile";
import CharacterDetails from "./components/CharacterDetails";

class App extends Component {
  render() {
    return (
    	<div className="app">
            <aside className="app__character-tiles">
                <CharacterTile />
                <CharacterTile />
                <CharacterTile />
            </aside>
            <CharacterDetails />
        </div>
    );
  }
}

export default App;
