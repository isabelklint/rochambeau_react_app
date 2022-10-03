import React, { useEffect, useState } from "react";
import "./Game.css";

const Game = () => {
  const [computerSelection, setComputerSelection] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [finalOutput, setFinalOutput] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];
  const [you,setYourScore]=useState(0)
  const [me,setComputerScore]=useState(0)
  const clickHandler = (value) => {
    setUserSelection(value);
    randomChoiceGenerator();
  };

  const randomChoiceGenerator = () => {
    const randomSelection =
      selection[Math.floor(Math.random() * selection.length)];
    setComputerSelection(randomSelection);
  };

  useEffect(() => {
      switch (userSelection + computerSelection) {
        case "✂️📰":
        case "🧱✂️":
        case "📰🧱":
        case "🦎📰":
        case "🖖✂️":
        case "🧱🦎":
        case "📰🖖":
        case "🖖🧱":
        case "✂️🦎":
        case "🦎🖖":
          setFinalOutput("YOU WON! 🎉");
          setYourScore(you+1);
          break;
        case "📰✂️":
        case "✂️🧱":
        case "🧱📰":
        case "📰🦎":
        case "✂️🖖":
        case "🦎🧱":
        case "🖖📰":
        case "🧱🖖":
        case "🦎✂️":
        case "🖖🦎":
          setFinalOutput("YOU LOSE! 👎 ");
          setComputerScore(me+1);
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setFinalOutput("ITS A DRAW! 💥 ");
          break;
        default:
          break;
      }
  }, [computerSelection, userSelection]);

  return (
    <>
      <div>
        <div className="container">
          <div className="section">
            <div className="info">
            <div className="attack-btn">
          {selection.map((select, index) => (
            <button key={index} onClick={() => clickHandler(select)}>
              {select}
            </button>
          ))}
        </div>
              <h3>You</h3>
            </div>
            <div className="show">{userSelection}</div>
          </div>

          <div className="section">
            <div className="info">
              <h3>Computer</h3>
            </div>
            <div className="show computer">{computerSelection}</div>
          </div>
        </div>
        <div>
        <h2>{finalOutput} </h2>
        <h2>{you + " " + me}</h2>
      </div>
      <div className="reset-btn">
            <button>
              RESET SCORE
            </button>
        </div>
      </div>
    </>
  );
};

export default Game;