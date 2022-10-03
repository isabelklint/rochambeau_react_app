import React, { useState } from "react";
//import "./Rules.css";


function Rules() {
  const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(true);
    };

    return (
      <div>
      <button type="button" class="btn btn-primary" onClick={handleClick}>SEE RULES</button>
        {isShown && (
          <div><h3>Loren ipsum</h3></div>
        )}
      </div>
      );
    }

  export default Rules;