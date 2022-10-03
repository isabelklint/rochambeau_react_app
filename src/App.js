import React from "react";
import "./App.css";
import Rules from "./Rules.js"
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ROCHAMBEAU</h1>
        <Header />
        <Rules />
      </div>
    </div>
  );
}