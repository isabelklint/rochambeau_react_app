import React from "react";
import Game from "./Game"
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Game defaultGame="new game" />
      </div>
      <footer>
        This project was coded by Wasline Saint fleur and Isabel Klint is{" "}
        <a
          href="https://github.com/isabelklint/rochambeau_react_app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}