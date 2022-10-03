import React from "react";
import "./Header.css";
import Rules from "./Rules.js";

export default function Header(props) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="header col-10 col-lg-6 mt-5">
        <div className="row h-100 d-flex align-items-center px-2">
          <div className="col-4 d-flex flex-column ">
            <Rules />
          </div>
          <div className="col-4 score-container">
            <div className="score-text">SCORE</div>
            <div className="score-value">{props.userScore}</div>
          </div>
        </div>
      </div>
      </div>    
  );
}
;