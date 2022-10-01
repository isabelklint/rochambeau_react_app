import React from "react";
import "./App.css";
import Game from "./Game.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ROCHAMBEAU</h1>
        <Game defaultGame="NEW GAME" />
      </div>
    </div>
  );
}