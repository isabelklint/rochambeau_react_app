import React, { useState } from "react";
import Round from "../Round.js";
import "./Game.css";


function Game() {
  const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(true);
    };

    return (
      <div>
      <button type="button" class="btn btn-primary" onClick={handleClick}>START GAME</button>
        {isShown && (
          <div><h3>CHOOSE ONE:</h3></div>
        )}
      {isShown && <Round />}
      </div>
      );
    }

  export default Game;