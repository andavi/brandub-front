import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import Brandub from "./Game";
import Board from "./Board";
// import Welcome from "./Welcome";


// eslint-disable-next-line no-unused-vars
const App = Client({
  game: Brandub,
  // board: Board
});

render(<App />, document.getElementById("root"));