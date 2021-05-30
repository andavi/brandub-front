// import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './celtic-clover.svg';
import './Welcome.css';
import { Client } from "boardgame.io/react";
import Brandub from "./Game";
import Board from "./Board";




function renderGame(App) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

function Welcome() {

  const App = Client({
    game: Brandub,
    board: Board
  });

  return (
    <div className="Wecome">
      <header className="Wecome-header">
      <h1>Brandub</h1>
        <img src={logo} className="Wecome-logo" alt="logo" />
        <p>
          Warning: Ongoing Construction<br />
          Enter at your own risk...
        </p>
        <button
          className="Wecome-link"
          onClick={ renderGame(App) }
        >
          Enter
        </button>
      </header>
    </div>
  );
}


export default Welcome;
