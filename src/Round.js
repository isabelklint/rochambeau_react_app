import React, { useMemo, useState } from "react";
// import Result from "./Result";
import "./Round.css";
const hand = ["rock", "paper", "scissors", "Spock", "Lizard"];

const Round = () => {
  const [selected, setSelected] = useState("");
  const [computedSelected, setComputedSelected] = useState("");

  const play = () => {
    if (!selected) {
      return;
    }
    const computerHandIndex = Math.floor(Math.random() * hand.length);
    setComputedSelected(hand[computerHandIndex]);
  };

  const result = useMemo(() => {
    if (computedSelected === selected) {
      return `DRAW`;
    } else {
      if (
        (computedSelected === "rock" && selected === "scissors") ||
        (computedSelected === "rock" && selected === "Lizard") ||
        (computedSelected === "paper" && selected === "rock") ||
        (computedSelected === "paper" && selected === "Spock") ||
        (computedSelected === "scissors" && selected === "paper") ||
        (computedSelected === "scissors" && selected === "Lizard") ||
        (computedSelected === "Spock" && selected === "rock") ||
        (computedSelected === "Spock" && selected === "scissors") ||
        (computedSelected === "Lizard" && selected === "Spock") ||
        (computedSelected === "Lizard" && selected === "paper")
      ) {
        return "I WIN";
      }
      return "YOU WIN";
    }
  }, [computedSelected, selected]);

  return (
    <div>
      <div>
        <button  type="button" class="btn btn-primary" onClick={() => setSelected("rock")}>rock</button>
        <button  type="button" class="btn btn-primary" onClick={() => setSelected("paper")}>paper</button>
        <button  type="button" class="btn btn-primary" onClick={() => setSelected("scissors")}>scissors</button>
        <button  type="button" class="btn btn-primary" onClick={() => setSelected("paper")}>Spock</button>
        <button  type="button" class="btn btn-primary" onClick={() => setSelected("scissors")}>Lizard</button>
      </div>
      <button  type="button" class="btn btn-primary" onClick={play}>play</button>
      <p>YOU: {selected}</p>
      <p>ME: {computedSelected}</p>
      <div>{result}</div>
    </div>
  );
}

export default Round;