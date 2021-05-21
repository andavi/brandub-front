import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import Brandub from "./game";
import Board from "./board";

const App = Client({
  game: Brandub,
  board: Board
});

render(<App />, document.getElementById("root"));