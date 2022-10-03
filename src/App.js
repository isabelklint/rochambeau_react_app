import React from "react";
import "./App.css";
import Game from "./components/Game.js"
import Header from "./components/Header.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ROCHAMBEAU</h1>
        <Header />
        <Game />
      </div>
    </div>
  );
}